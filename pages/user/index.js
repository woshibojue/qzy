// pages/user/index.js
import { getStorageSync } from "../../asny/asny.js";
Page({
  /**
   * 页面的初始数据
   */
  data: { b: "aaa" },
  a() {
    wx.setStorageSync("userinfo", this.data.b);
    console.log(this.data.b);
  },
  b() {
    try {
      this.togetStorage("userinfo");
    } catch (e) {
      console.log("errrr");
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
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
