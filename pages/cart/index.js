import { cUidAndCart, tabbartsetbadge } from "../../utils/ut.js";
import { databaseupdate } from "../../asny/asny.js";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    cart: [], //接收购物车数组
    //底部工具栏计算总价
    totalprice: 0,
    //计算总件数
    totalnum: 0,
    //底部工具栏全选框勾选状态
    allselect: false,
    cartlength: 0,
    slideButtons: [
      {
        text: "删除",
        type: "warn",
        extClass: "a",
      },
    ],
    error: "", //错误提示
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},
  onShow: async function () {
    await cUidAndCart();
    this.getlistlength();
  },
  //获取缓存数组长度
  getlistlength() {
    let cart = wx.getStorageSync(`cart`) || [];
    let cartlength = cart.length;
    this.setData({
      cartlength,
      cart,
    });
    if (cartlength) {
      this.setcart(cart);
      console.log("aaaaa", cartlength);
    }
  },
  //滑动删除
  async slideButtonTap(e) {
    const id = e.currentTarget.dataset.id;
    let { cart } = this.data;
    const index = cart.findIndex((v) => v.goodsid === id);
    cart.splice(index, 1);
    await this.setcart(cart);
    const { _openid } = wx.getStorageSync("userid")[0];
    ///A种传值
    const wherecondition = { _openid: _openid };
    let data = {
      cart: wx.cloud.database().command.pull({ goodsid: id }),
    };
    await databaseupdate({ collection: "cartinfo", wherecondition, data });
    await cUidAndCart();
    this.getlistlength();
  },
  //点击购物车数组前的复选框触发

  handleccboxChange(e) {
    const id = e.currentTarget.dataset.id;
    let { cart } = this.data;
    const index = cart.findIndex((v) => v.goodsid === id);
    //取反
    cart[index].select = !cart[index].select;
    //  const Attributes = cart[index].select;
    this.setcart(cart);
    // const { _openid } = wx.getStorageSync("userid")[0]; //*
    // ///A种传值
    // const wherecondition = { _openid: _openid };
    // ///B种传值
    // //更新cart数组下标为index的select属性的值
    // let data = {
    //   ["cart." + index + ".select"]: Attributes,
    // };
    // databaseupdate({ collection: "cartinfo", wherecondition, data });
  },

  //商品数量+1或-1功能
  goodsnumedit(e) {
    let { cart } = this.data;
    const { id, num } = e.currentTarget.dataset;
    console.log(id, num);
    const index = cart.findIndex((v) => v.goodsid === id);
    if (cart[index].num <= 1 && num < 0) {
      this.setData({
        error: "数量应大于0",
      });
      return;
    } else {
      cart[index].num += num;
      const Attributes = cart[index].num;
      this.setcart(cart);
      cUidAndCart();
      const { _openid } = wx.getStorageSync("userid")[0]; //*
      ///A种传值
      const wherecondition = { _openid: _openid };
      ///B种传值
      //更新cart数组下标为index的select属性的值
      let data = {
        ["cart." + index + ".num"]: Attributes,
      };
      databaseupdate({ collection: "cartinfo", wherecondition, data });
    }
  },

  //全选和反选功能
  //全选时候所有商品checked属性
  allcheckedchange(e) {
    let { isallselect } = e.currentTarget.dataset;
    let { cart } = this.data;
    cart.forEach((v) => {
      v.select = !isallselect;
      //TODO 批量更新
    });
    this.setcart(cart);
    // const { _openid } = wx.getStorageSync("userid")[0]; //*
    // let a = wx.cloud
    //   .callFunction({
    //     name: "moreupdate",
    //     data: { id: _openid, collection: "cartinfo" },
    //   })
    //   .then((res) => {
    //     console.log("ddd", res);
    //   })
    //   .catch((res) => {
    //     console.log(res);
    //   });
  },

  //传入data中的购物车数组
  //计算购物车总件数 "勾选"商品 所有num之和
  //计算totalprice=所有"勾选"商品（单价*num）
  //勾选商品即checked属性为true
  //有一个商品checked为false则allchecked为false
  //购物车数组为空时 allchecked为false
  //处理最后将购物车存入缓存和data
  setcart(cart) {
    //底部工具栏计算总价
    let totalprice = 0;
    //计算总件数
    let totalnum = 0;
    //底部工具栏全选框勾选状态
    let allselect = true;
    cart.forEach((v) => {
      if (v.select) {
        totalprice += v.num * v.price;
        totalnum += v.num;
      } else {
        allselect = false;
      }
    });
    cart.length === 0 ? (allselect = false) : allselect;
    wx.setStorageSync("cart", cart);
    this.setData({ totalprice, totalnum, allselect, cart });
  },

  //点击支付按钮
  topay() {
    if (!this.data.totalnum) {
      this.setData({
        error: "买一件吧",
      });
      return;
    }
    let paycar = [];
    this.data.cart.forEach((v) => {
      if (v.select) {
        paycar.push(v);
      }
    });
    var model = JSON.stringify(paycar);
    console.log(paycar);
    // 3 跳转到 支付页面
    wx.navigateTo({
      url: "/pages/topay/index?model=" + model,
    });
  },
});
