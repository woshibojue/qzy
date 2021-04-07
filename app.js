//app.js
App({
  //onLaunch,onShow: options(path,query,scene,shareTicket,referrerInfo(appId,extraData))
  onLaunch: function (options) {
    wx.cloud.init({
      env: "qzydatabase-1gsasl4927a68f6c", //云开发环境id
      traceUser: true,
    });
  },

  onShow: function (options) {},
  onHide: function () {},
  onError: function (msg) {},
  //options(path,query,isEntryPage)
  onPageNotFound: function (options) {},
});
