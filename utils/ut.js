import { callFunction, databasewhere } from "../asny/asny.js";
/**
 *1读取缓存2不存在时获取openid并查询是否存在于数据库中
 *3存在于数据库 存入缓存
 *@return:既无缓存数据库又无信息 =>flase
 *@return:其余return:true 此情况缓存中有货
 *@param： 1缓存userid{string} 2查询条件condition{object}
 */
export const checkidandgets = async () => {
  let res = wx.getStorageSync("userid"); //读取缓存中的用户
  if (!res) {
    //没有id
    console.log("没有id缓存"); //无缓存则获取 1获取用户id 2查询是否存在数据库
    //this.checkid();
    //获取用户id
    const { openid } = await callFunction("login");
    console.log("openid", openid);
    //根据id查询是否存在数据库
    const condition = { _openid: openid }; //查询条件
    //查询数据库
    let { data } = await databasewhere({ collection: "userinfo", condition });
    console.log("userdata", data);
    console.log(data.length);
    if (!data.length) {
      console.log("不存在于数据库");
      return false;
    } else {
      console.log("存在于数据库");
      wx.setStorageSync("userid", data);
      return true;
    }
  } else {
    console.log("userid存在缓存", res);
    return true;
  }
};
