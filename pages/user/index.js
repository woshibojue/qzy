// pages/user/index.js
import { getStorageSync } from "../../asny/asny.js";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    b: [
      [
        {
          val: "塞尔达传说",
          state: "",
          name: "游戏",
          images: "../../icon/cart-o.png",
        },
        {
          val: "马里欧赛车",
          state: "",
          name: "游戏",
          images: "../../dist/images/2.jpg",
        },
        {
          val: "马里欧奥德赛",
          state: "",
          name: "游戏",
          images: "../../dist/images/3.jpg",
        },
        {
          val: "异度之刃2",
          state: "",
          name: "游戏",
          images: "../../dist/images/4.jpg",
        },
      ],
      [
        { val: "中国大陆", name: "版本", state: "" },
        { val: "日版", name: "版本", state: "" },
        { val: "美版", name: "版本", state: "" },
        { val: "欧版", name: "版本", state: "" },
      ],
      [
        { val: "东风快递", name: "快递", state: "" },
        { val: "美团外卖", name: "快递", state: "" },
        { val: "EMS", name: "快递", state: "" },
        { val: "顺丰快递", name: "快递", state: "" },
      ],
    ], //商品类型相关数据，一般通过调用服务端接口获取（这里可以自行修改数据，我写的数据比较简略）
    sku_list: [
      {
        attrs: "塞尔达传说|日版|EMS",
        num: 10,
        price: "330.00",
        sku_id: "a1",
      },
      {
        attrs: "塞尔达传说|欧版|东风快递",
        num: 6,
        price: "350.00",
        sku_id: "a2",
      },
      {
        attrs: "马里欧赛车|中国大陆|美团外卖",
        num: 11,
        price: "295.00",
        sku_id: "a3",
      },
      {
        attrs: "马里欧奥德赛|中国大陆|EMS",
        num: 3,
        price: "305.00",
        sku_id: "a4",
      },
      {
        attrs: "异度之刃2|日版|顺丰快递",
        num: 1,
        price: "450.00",
        sku_id: "a5",
      },
    ],
  },
  a() {
    wx.setStorageSync("userinfo", this.data.b);
    console.log(this.data.b);
  },
  b() {
    this.c("userinfo");
  },
  async c(e) {
    let res = await getStorageSync({ key: e });
    console.log("c:", res);
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {},

  onLoad: function (options) {},
  async togetStorage(query) {
    console.log(query);
    // wx.setStorageSync("key", JSON.stringify("e.detail.userInfo"));
    const res = await getStorageSync({ key: query });
    console.log("res");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
