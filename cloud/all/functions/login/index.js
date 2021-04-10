// 云函数入口文件
const cloud = require("wx-server-sdk");

cloud.init();

// 云函数入口函数
exports.main = async (event, context) => {
  // console.log("event", event);
  // console.log("context", context);
  //微信调用上下文
  const wxContext = cloud.getWXContext();

  return {
    //event,
    openid: wxContext.OPENID,
    // appid: wxContext.APPID,
    // unionid: wxContext.UNIONID,
  };
};
