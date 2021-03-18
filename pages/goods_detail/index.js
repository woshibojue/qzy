import { database } from "../../asny/database.js";

// pages/goods_detail/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //接受商品详情页链接
    goodsdetial: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取goodsdetail表的_id为drftq数据
    this.getdatabase("goodsdetail", "drftq");
  },
  async getdatabase(e, v) {
    let { data } = await database(e, v);
    // let a = data[0].image000;
    // console.log(data.image000);
    // console.log(a);
    this.setData({
      goodsdetial: data.image000,
    });
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
