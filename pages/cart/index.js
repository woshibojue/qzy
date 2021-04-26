import { cUidAndCart } from "../../utils/ut.js";
import { tochooseAddress } from "../../asny/asny.js";

Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},
  onShow: function () {
    cUidAndCart();
  },
  async addaddress() {
    // 获取用户收获地址
    const res = await tochooseAddress();
    wx.setStorageSync("address", res);

    // console.log(res.userName);
    // console.log(res.postalCode);
    // console.log(res.provinceName);
    // console.log(res.cityName);
    // console.log(res.countyName);
    // console.log(res.detailInfo);
    // console.log(res.nationalCode);
    // console.log(res.telNumber);
  },
});
