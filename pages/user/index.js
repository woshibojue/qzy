Page({
  onLoad: function () {
    this.setData({
      // icon: "../../icon/user.png",
      slideButtons: [
        {
          text: "普通",
          // src: "../../icon/cart-o.png", // icon的路径
        },
        {
          text: "普通",
          extClass: "test",
          // src: "../../icon/cart-o.png", // icon的路径
        },
        {
          type: "warn",
          text: "警示",
          extClass: "test",
          //  src: "/page/weui/cell/icon_del.svg", // icon的路径
        },
      ],
    });
  },
  slideButtonTap(e) {
    console.log("slide button tap", e.detail);
  },
});
