import { database } from "../../asny/database.js";

// pages/goods_detail/index.js
Page({
  /**
   * 页面的初始数据
   */
  bzby: [
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/（天猫）鲍汁鲍鱼详情页/(天猫)鲍汁鲍鱼详情页切-01.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/（天猫）鲍汁鲍鱼详情页/(天猫)鲍汁鲍鱼详情页切-02.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/（天猫）鲍汁鲍鱼详情页/(天猫)鲍汁鲍鱼详情页切-03.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/（天猫）鲍汁鲍鱼详情页/(天猫)鲍汁鲍鱼详情页切-04.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/（天猫）鲍汁鲍鱼详情页/(天猫)鲍汁鲍鱼详情页切-05.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/（天猫）鲍汁鲍鱼详情页/(天猫)鲍汁鲍鱼详情页切-06.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/（天猫）鲍汁鲍鱼详情页/(天猫)鲍汁鲍鱼详情页切-07.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/（天猫）鲍汁鲍鱼详情页/(天猫)鲍汁鲍鱼详情页切-08.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/（天猫）鲍汁鲍鱼详情页/(天猫)鲍汁鲍鱼详情页切-09.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/（天猫）鲍汁鲍鱼详情页/(天猫)鲍汁鲍鱼详情页切-10.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/（天猫）鲍汁鲍鱼详情页/(天猫)鲍汁鲍鱼详情页切-11.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/（天猫）鲍汁鲍鱼详情页/(天猫)鲍汁鲍鱼详情页切-12.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/（天猫）鲍汁鲍鱼详情页/(天猫)鲍汁鲍鱼详情页切-13.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/（天猫）鲍汁鲍鱼详情页/(天猫)鲍汁鲍鱼详情页切-14.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/（天猫）鲍汁鲍鱼详情页/(天猫)鲍汁鲍鱼详情页切-15.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/（天猫）鲍汁鲍鱼详情页/(天猫)鲍汁鲍鱼详情页切-16.jpg",
  ],
  xnhj: [
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/(天猫)香柠花胶详情页/（天猫）香柠花胶详情页切-01.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/(天猫)香柠花胶详情页/（天猫）香柠花胶详情页切-02.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/(天猫)香柠花胶详情页/（天猫）香柠花胶详情页切-03.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/(天猫)香柠花胶详情页/（天猫）香柠花胶详情页切-04.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/(天猫)香柠花胶详情页/（天猫）香柠花胶详情页切-05.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/(天猫)香柠花胶详情页/（天猫）香柠花胶详情页切-06.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/(天猫)香柠花胶详情页/（天猫）香柠花胶详情页切-07.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/(天猫)香柠花胶详情页/（天猫）香柠花胶详情页切-08.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/(天猫)香柠花胶详情页/（天猫）香柠花胶详情页切-09.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/(天猫)香柠花胶详情页/（天猫）香柠花胶详情页切-10.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/(天猫)香柠花胶详情页/（天猫）香柠花胶详情页切-11.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/(天猫)香柠花胶详情页/（天猫）香柠花胶详情页切-12.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/(天猫)香柠花胶详情页/（天猫）香柠花胶详情页切-13.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/(天猫)香柠花胶详情页/（天猫）香柠花胶详情页切-14.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/(天猫)香柠花胶详情页/（天猫）香柠花胶详情页切-15.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/(天猫)香柠花胶详情页/（天猫）香柠花胶详情页切-16.jpg",
    "cloud://qzydatabase-1gsasl4927a68f6c.717a-qzydatabase-1gsasl4927a68f6c-1305154861/详情页/(天猫)香柠花胶详情页/（天猫）香柠花胶详情页切-17.jpg",
  ],
  data: {
    //接受商品详情页链接
    goodsdetial: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.goodsid == "bzby") {
      this.setData({
        goodsdetial: this.bzby,
      });
    }
    if (options.goodsid == "xnhj") {
      this.setData({
        goodsdetial: this.xnhj,
      });
    }

    ////获取goodsdetail表的_id为drftq数据
    ////this.getdatabase("goodsdetail", "drftq");
  },
  ////async getdatabase(e, v) {
  ////   let { data } = await database(e, v);
  ////  this.setData({
  ////    goodsdetial: data.image000,
  ////  });
  ////},

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
