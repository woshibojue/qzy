// pages/goods_detail/index.js
import {
  getStorageSync,
  getUserProfile,
  databaseadd,
} from "../../asny/asny.js";

Page({
  /**
   * 页面的初始数据
   */
  bzby: [
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01hWS6mw1CUyJuOT7fQ_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01FFOS5l1CUyJsoys93_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01GaB0n71CUyJvHlLAB_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01RUvhbN1CUyJldoD5t_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01EcBbSm1CUyJrfkd57_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01PCRGZi1CUyJsp1gnC_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01MWfoM41CUyJvHl0N4_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01m6191V1CUyJuOVGkk_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01ZYRZwF1CUyJpDZTvW_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01YDPDRV1CUyJpDZ0pL_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01wGmALk1CUyJpekMFF_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN017coILp1CUyJqazWQX_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01DCC5vP1CUyJuOWsYJ_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01qnBfje1CUyJnQqa06_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01M3if5E1CUyJrfm2Q0_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01I6npBH1CUyJuOVXQQ_!!2210072440085.jpg",
  ],
  xnhj: [
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01VYJQjO1CUyJttEpJj_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN011nO4Nd1CUyJvOLBKM_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01oCG7701CUyJmwHAkO_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01CDWJDl1CUyJpWYPWw_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01uQG3zF1CUyJnXRQdQ_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01dA2jsC1CUyJvrBZtS_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01ZlCaQp1CUyJpWcIkQ_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN019bhiaO1CUyJttEDv2_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01QFoNvS1CUyJnXQpFb_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01EJThS21CUyJpKP667_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01nMzFJv1CUyJpWZPxB_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01wFLctm1CUyJgzihoR_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01GuWjHZ1CUyJpWXsHY_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01Hhj6AM1CUyJmwHAmc_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01LLQ2E01CUyJqR14mh_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01dZs2cT1CUyJvOJVPX_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01h7y1Wq1CUyJpKLsWK_!!2210072440085.jpg",
  ],
  zpftq: [
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01xlzoOY1CUyJsTSIiX_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01fxZig51CUyJriV9Ug_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN016ds0Cc1CUyJgvuWko_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01yssi8G1CUyJuRFzZu_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01uQNzNf1CUyJsrp1ul_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN014h5KiM1CUyJqNAwyq_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01xve3IK1CUyJriWQW4_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01xu3AL81CUyJgvuWm6_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01IzaepJ1CUyJpGPEqp_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01ooSShW1CUyJsrp1vt_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01UDJXSH1CUyJvKWw68_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01Q1V5bC1CUyJriWUhF_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01Y3D8SJ1CUyJlgXrNm_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01swo4Jb1CUyJqdhhAW_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01Rj2faB1CUyJuRFWUV_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01nY9X9j1CUyJpScypj_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01YVnTzV1CUyJlgXrOp_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01USycUK1CUyJtpLLNX_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01OiPh0a1CUyJlgYb9z_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01SipOQq1CUyJmsJjCe_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01PxotrL1CUyJqNCDzd_!!2210072440085.jpg",
  ],
  drftq: [
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01aTOBUB1CUyJx0qDUY_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01dOzPJT1CUyK02CIgV_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01mvqi2o1CUyK21aD4b_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01j9Q8de1CUyK21asco_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01duInqZ1CUyJuQRKGK_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01WG9YRV1CUyJoSuuVv_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN015HaOYE1CUyK1Pu85Y_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01VaOVWV1CUyK3ORwFR_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01tiT6VU1CUyJtBIOtX_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01R8EkeI1CUyJx0qgcA_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01I8xvGD1CUyK21cUPa_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01b6mHZ81CUyK02BpaL_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01D4dUQo1CUyJuQSKgC_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01cF92A81CUyJzIJwvq_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01AxHvTW1CUyJv25OFC_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01LEAHyV1CUyK0QRe0O_!!2210072440085.jpg",
  ],
  qzymby: [
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01R7dEVE1CUyJvlCnRD_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01Sj2I5C1CUyJsRVSZb_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN016e5PgT1CUyJuPJHj4_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01JzGalT1CUyJpEQmqR_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01ooUHmP1CUyJpQiLtV_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01xJVx6M1CUyJuPJ9Pg_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01E132iQ1CUyJpEQNth_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN0109X9A31CUyJmqTOjg_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01zss98m1CUyJvlCjIY_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01v9CA4z1CUyJledVHJ_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01MS1tZc1CUyJpfb7pw_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01pWa6BA1CUyJpQhLXP_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01WXX6Q81CUyJvlCOWK_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01N71byt1CUyJpETP3C_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01MtsfTj1CUyJqLHjco_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01FUGa2G1CUyJspvHAZ_!!2210072440085.jpg",
  ],
  shsb: [
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01J5eh8Y1CUyJx4iJUt_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN013bo3IX1CUyJs4PSI2_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01zYgXq91CUyJwKNd9m_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01iaXY5a1CUyJlW8E08_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01Qc7Wf51CUyJx4gVGN_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01s0V0cf1CUyJxSqLLe_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01r5gGNO1CUyJlWAqBM_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01oLl7HS1CUyJs4RfWl_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01LceAhY1CUyJqFTKZm_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01pnHjTo1CUyJqFTnfZ_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01E8QV9C1CUyJrSqlMc_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01vZgL7n1CUyJvF24QF_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01blBvHF1CUyJvF18DY_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN018KWAMg1CUyJwKOASj_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01ZPIi2m1CUyJwKO29C_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN012AJXUJ1CUyJx4iFOy_!!2210072440085.jpg",
  ],
  hssyp: [
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN0165qIVQ1CUyJsPkuGI_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN012XqVvl1CUyJsPli9k_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01ZQwWgk1CUyJnQ1ctC_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01uKyiqv1CUyJmooTp5_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01OUOHjs1CUyJuNjGdR_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01KeBF6J1CUyJgsRMOC_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01WvvIx01CUyJpP3R6r_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01zXCUHK1CUyJsoC45P_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01RaqxPu1CUyJgsQtHW_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN011lCemb1CUyJsoEXvH_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01bDzMxI1CUyJpP21ol_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01VjNqky1CUyJqJXeFF_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01Ml9IJc1CUyJqa85NM_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN0172Qhpc1CUyJvjXPLf_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01yLQX5G1CUyJlcymwG_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01z9FenX1CUyJld1078_!!2210072440085.jpg",
  ],
  jtzlhj: [
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01H1PGOH1CUyJpFRcmY_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01auFPWk1CUyJpFThfb_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01I5IRJy1CUyJsSQG0W_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01PGZk561CUyJuQHhsN_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01VegIft1CUyJuQIyr9_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01M7MvbN1CUyJtoMJun_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01lJiZEC1CUyJlfd84Y_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01S3hWQS1CUyJqcmhO1_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01E5YQ3E1CUyJuQIiGC_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01VekISW1CUyJvmBLte_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01zO9okh1CUyJtoOnlI_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01GrJtGS1CUyJpgcZ7p_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN017tRoVq1CUyJgv18mZ_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01IPQzqU1CUyJuQIiHJ_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01jc5sgW1CUyJgv2HUH_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01TnfxHc1CUyJqMD4GR_!!2210072440085.jpg",
  ],
  data: {
    goodsid: "", //商品id
    goodsdetial: [], //接受商品详情页链接
    animationDataSel: {}, //动态弹出框所需参数
    selHidden: true, //模态框是否隐藏
    catr: [], //购物车数组
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let a;
    switch (options.goodsid) {
      case "bzby":
        a = this.bzby;
        break;
      case "xnhj":
        a = this.xnhj;
        break;
      case "zpftq":
        a = this.zpftq;
        break;
      case "drftq":
        a = this.drftq;
        break;
      case "qzymby":
        a = this.qzymby;
        break;
      case "shsb":
        a = this.shsb;
        break;
      case "hssyp":
        a = this.hssyp;
        break;
      case "jtzlhj":
        a = this.jtzlhj;
        break;
    }
    this.setData({
      goodsdetial: a,
      goodsid: options.goodsid,
    });
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
  // 初次渲染加载要执行的动画
  onReady: function () {
    this.animation = wx.createAnimation({
      //动画
      duration: 300, //动画持续时间
      timingFunction: "linear", //动画的效果 动画从头到尾的速度是相同的
      transformOrigin: "50% 50% 0",
    });
  },

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
  //asnyc 获取用户会员资料
  async togetUserProfile() {
    const res = await getUserProfile();
    const data = {
      avatarUrl: res.avatarUrl,
      city: res.city,
      country: res.country,
      gender: res.gender,
      language: res.language,
      nickName: res.nickName,
      province: res.province,
      time: new Date(),
    };
    await databaseadd({ collection: "userinfo", data });
  },
  //点击加入购物车触发事件
  //todo  用户是否登录？1是则继续  2否则要求登录
  //已登录 触发上弹窗口动画 选择数目
  addcat() {
    this.togetUserProfile(); //获取授权弹窗 并记录数据

    // this.showSelBox();
  },
  buyit() {
    //////////////////
    wx.cloud.callFunction({
      name: "login",
      complete: (res) => {
        console.log("callFunction test result: ", res.result.openid);
      },
    });
    ///////////////////
  },
  //显示窗口
  showSelBox: function () {
    //显示选项
    let that = this;
    let systemInfo = wx.getSystemInfoSync();
    // console.log("getSystemInfoSync");
    // console.log(systemInfo);
    //上弹980rpx高度的窗口 通过systemInfo获取窗口大小并转为对应rpx
    let px = (550 / 750) * systemInfo.windowWidth;

    this.animation.translateY(-px).step(); //在Y轴偏移tx，单位px

    this.setData({
      //通过绑定的animationDataSel用export()把动画表现出来
      animationDataSel: that.animation.export(),
      //模糊背景显示出来
      selHidden: false,
    });
  },
  // 隐藏窗口
  hiddenSel: function () {
    //隐藏选项
    let that = this;
    let animation = wx.createAnimation({
      //动画
      duration: 300, //动画持续时间
      timingFunction: "linear", //动画的效果 动画从头到尾的速度是相同的
      transformOrigin: "50% 50% 0",
    });
    let systemInfo = wx.getSystemInfoSync();
    let px = (550 / 750) * systemInfo.windowWidth;
    animation.translateY(px).step(); //在Y轴偏移tx，单位px
    this.setData({
      animationDataSel: animation.export(),
      selHidden: true,
    });
  },
  //登录授权按钮
  ongetUserInfo: function (e) {
    // wx.showLoading({
    //   title: "登录中...",
    // });
    // wx.cloud.callFunction({
    //   name: "login",
    //   success: (res) => {
    //     console.log("[云函数] [login] user openid: ", res.result.openid);
    //     // app.globalData.openid = res.result.openid;
    //     // app.globalData.name = e.detail.userInfo.nickName;
    //     // app.globalData.avatarUrl = e.detail.userInfo.avatarUrl;
    //     //这里执行数据存储到数据库的操作
    //   },
    //   fail: (err) => {
    //     console.error("[云函数] [login] 调用失败", err);
    //     wx.hideLoading();
    //     wx.navigateTo({
    //       url: "../index/index",
    //     });
    //   },
    //   complete: (res) => {
    //     console.log("callFunction test result: ", res);
    //   },
    // });
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      lang: "zh_CN",
      success: (res) => {
        // console.log(res.userInfo);
        // console.log(res.userInfo.avatarUrl);
        // console.log(res.userInfo.country);
        // console.log(res.userInfo.province);
        // console.log(res.userInfo.city);
        // console.log(res.userInfo.gender);
        // console.log(res.userInfo.language);
        // console.log(res.userInfo.nickName);
      },
    });

    // wx.chooseAddress({
    //   success: (res) => {
    //     console.log(res);
    //   },
    //   fail: function (err) {
    //     console.log(err);
    //   },
    // });
  },
});
