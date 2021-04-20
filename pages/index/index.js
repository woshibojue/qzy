import { tabbartsetbadge, checkidandgets } from "../../utils/ut.js";
// pages/search/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数组
    swipergoods: [
      {
        id: "zpftq",
        image:
          "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01bSRBGj1CUyK1ZneWs_!!2210072440085.jpg",
      },
      {
        id: "drftq",
        image:
          "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01cJfacO1CUyK0USVbe_!!2210072440085.png",
      },
      {
        id: "qzymby",
        image:
          "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01UIu7n81CUyJuPOaOz_!!2210072440085.png",
      },
      {
        id: "xnhj",
        image:
          "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01oDfSQ91CUyJttFy9H_!!2210072440085.png",
      },
      {
        id: "bzby",
        image:
          "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01MHJ8d01CUyJohXzIK_!!2210072440085.png",
      },
    ],
    //商品列表数组
    goodslist: [
      {
        id: "shsb",
        image:
          "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN0105Veip1CUyJwKNA2k_!!2210072440085.png",
        title: "沁滋源深海三宝花胶鱼皮海参年夜饭佛跳墙大盆菜原料单品",
        price: 56,
      },
      {
        id: "hssyp",
        image:
          "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01TsAC1y1CUyJpQjsar_!!2210072440085.jpg",
        title: "沁滋源红烧深海鱼皮包邮推荐单人拌饭宴客胶原蛋白加热即食年饭",
        price: 36,
      },
      {
        id: "jtzlhj",
        image:
          "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01t2ENMg1CUyJmrNn0z_!!2210072440085.png",
        title: "沁滋源金汤杂粮花胶加热即食鱼胶低脂胶质滋补月子孕妇无添加",
        price: 78,
      },
      {
        id: "qzymby",
        image:
          "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01Ar8SRC1CUyJpfgpa2_!!2210072440085.png",
        title: "沁滋源茄汁燕麦鲍鱼单只装佛跳墙包邮加热即食鲜美低脂高蛋白",
        price: 68,
      },
      {
        id: "bzby",
        image:
          "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01WwR4PB1CUyJpdnHp4_!!2210072440085.png",
        title: "沁滋源鲍汁鲍鱼六只装汤汁家宴推荐送礼年货捞饭加热即食",
        price: 356,
      },
      {
        id: "xnhj",
        image:
          "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01uj22Sj1CUyJqR4EKy_!!2210072440085.png",
        title: "沁滋源香柠花胶加热即食月子滋补富含胶原蛋白包邮新品推荐代餐",
        price: 82,
      },
      {
        id: "drftq",
        image:
          "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01aKFjyf1CUyK1PvfjW_!!2210072440085.png",
        title: "沁滋源佛跳墙干货加热即食海鲜礼包参鲍鱼花胶盆菜年夜饭",
        price: 146,
      },
      {
        id: "zpftq",
        image:
          "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN017nn3tv1CUyJlheXNX_!!2210072440085.png",
        title: "沁滋源佛跳墙干货加热即食海鲜礼盒海参鲜鲍鱼花胶盆菜年夜饭火锅",
        price: 556,
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let userid = await checkidandgets();

    if (userid) {
      tabbartsetbadge();
    }
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
