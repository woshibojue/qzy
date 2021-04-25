import {
  callFunction,
  databasewhere,
  getUserProfile,
  databaseadd,
} from "../asny/asny.js";
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
    wx.showLoading({
      title: "载入基础数据",
      mask: true,
    });
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
      wx.hideLoading(); //消除加载框
      return false;
    } else {
      console.log("存在于数据库");
      wx.setStorageSync("userid", data);
      wx.hideLoading(); //消除加载框
      return true;
    }
  } else {
    console.log("userid存在缓存", res);
    wx.hideLoading(); //消除加载框
    return true;
  }
};

//检查购物车数组是否存在
//@@return ture 则购物车存在 于数据库 也存在于缓存
//@@return flase 则购物车既不存在于数据库又不存在于缓存
/////////////////////////////
export const checkcartinfoandgets = async () => {
  let cart = wx.getStorageSync(`cart`) || [];
  if (!cart.length) {
    wx.showLoading({
      title: "载入购物车",
      mask: true,
    });
    //购物车数组长度为0则读取数据库
    //根据id查询是否存在数据库
    console.log("购物车不存在于缓存");
    await checkidandgets();
    const { _openid } = wx.getStorageSync("userid")[0];
    console.log("_openid", _openid);
    const condition = { _openid: _openid }; //查询条件
    //查询数据库
    let { data } = await databasewhere({ collection: "cartinfo", condition });
    console.log("cartinfo", data);
    console.log(data.length);
    if (!data.length) {
      console.log("缓存和数据库都没有购物车数组");
      wx.hideLoading(); //消除加载框
      return false;
    } else {
      console.log("购物车数组不存在于缓存，存在于数据库");
      wx.setStorageSync("cart", data[0].cart) || [];
      wx.hideLoading(); //消除加载框
      return true;
    }
  } else {
    console.log("购物车数组存在于缓存", cart);
    wx.hideLoading(); //消除加载框
    return true;
  }
};

/////////////////////////////
export const togetUserProfile = async () => {
  //如果查无此人

  const res = await getUserProfile(); //获取用户会员资料 授权弹窗
  /////////
  wx.showLoading({
    title: "登录中",
    mask: true,
  });
  //////////
  const adddata = {
    avatarUrl: res.avatarUrl,
    city: res.city,
    country: res.country,
    gender: res.gender,
    language: res.language,
    nickName: res.nickName,
    province: res.province,
    time: new Date(),
  };
  //存入数据库
  await databaseadd({ collection: "userinfo", adddata });
  const userid = await checkidandgets();
  /////////
  wx.hideLoading(); //消除加载框
  return userid;
};

//设置tabbar购物车位置角标
export const tabbartsetbadge = (cartNum) => {
  if (cartNum != 0) {
    //设置角标
    wx.setTabBarBadge({
      index: 1, //tabBar序号，从0开始计数
      text: cartNum.toString(),
    });
  } else {
    //移除角标
    wx.removeTabBarBadge({
      index: 2,
    });
  }
};
//tabbar页面载入时判断用户是否存在、购物车数组是否存在
export const cUidAndCart = async () => {
  let userid = await checkidandgets();
  if (userid) {
    //用户授权过
    let cartid = await checkcartinfoandgets();
    if (cartid) {
      //加入过购物车
      let cart = wx.getStorageSync(`cart`) || [];
      let totalnum = 0;
      cart.forEach((v) => {
        totalnum += v.num;
      });
      tabbartsetbadge(totalnum);
    }
  }
};
