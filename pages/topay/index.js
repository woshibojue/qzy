import {
  tochooseAddress,
  databaseadd,
  databasewhere,
  databaseupdate,
} from "../../asny/asny.js";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userinfo: {},
    uaddress: "",
    // 接收要买货物的数组
    shoppinglist: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list = JSON.parse(options.model);
    console.log(list);
    this.setData({
      shoppinglist: list,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},
  onShow: async function () {
    //从缓存中获取用户数据
    const address = wx.getStorageSync("address");
    if (!address) {
      const { _openid } = wx.getStorageSync("userid")[0]; //*
      const condition = { _openid: _openid }; //查询条件
      let { data } = await databasewhere({ collection: "address", condition });
      if (data.length) {
        console.log("存在于数据库!!");
        console.log(data[0].address[data[0].address.length - 1]);
        await wx.setStorageSync(
          "address",
          data[0].address[data[0].address.length - 1]
        );
        address = wx.getStorageSync("address");
      }
    }

    //拼接地址
    let uaddress =
      address.provinceName +
      address.cityName +
      address.countyName +
      address.detailInfo;
    this.setData({ userinfo: address, uaddress });
  },
  async addaddress() {
    // 获取用户收获地址
    const { _openid } = wx.getStorageSync("userid")[0]; //*
    //根据id查询是否存在数据库
    const condition = { _openid: _openid }; //查询条件
    const address = await tochooseAddress();
    //查询数据库
    let { data } = await databasewhere({ collection: "address", condition });
    if (!data.length) {
      console.log("不存在于数据库");
      const addressdata = [
        {
          userName: address.userName,
          postalCode: address.postalCode,
          provinceName: address.provinceName,
          cityName: address.cityName,
          countyName: address.countyName,
          detailInfo: address.detailInfo,
          nationalCode: address.nationalCode,
          telNumber: address.telNumber,
        },
      ];
      const adddata = {
        address: addressdata,
      };
      //存入数据库
      databaseadd({ collection: "address", adddata });
    } else {
      console.log("存在于数据库");
      const updatedata = [
        {
          userName: address.userName,
          postalCode: address.postalCode,
          provinceName: address.provinceName,
          cityName: address.cityName,
          countyName: address.countyName,
          detailInfo: address.detailInfo,
          nationalCode: address.nationalCode,
          telNumber: address.telNumber,
        },
      ];
      data = {
        address: wx.cloud.database().command.push(updatedata),
      };
      let wherecondition = condition;
      databaseupdate({ collection: "address", wherecondition, data });
    }

    console.log(address);

    wx.setStorageSync("address", address);
    //拼接地址
    let uaddress =
      address.provinceName +
      address.cityName +
      address.countyName +
      address.detailInfo;
    this.setData({ userinfo: address, uaddress });
  },
});
