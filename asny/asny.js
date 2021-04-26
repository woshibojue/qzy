///////////////////////////
/**
 *  promise 形式   wx.getUserProfile
 * 无 参数
 */
export const getUserProfile = () => {
  wx.showLoading({
    title: "授权中",
    mask: true,
  });
  return new Promise((resolve, reject) => {
    wx.getUserProfile({
      desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      lang: "zh_CN",
      success: (res) => {
        console.log("获取会员资料成功");
        console.log(res.userInfo);
        resolve(res.userInfo);
      },
      fail: (err) => {
        console.log("授权失败");
        reject(err);
        wx.hideLoading(); //消除加载框
      },
      complete: () => {
        console.log("promise 形式  getUserProfile");
        console.log("-------");
      },
    });
  });
};
///////////////////////////
/**
 *  promise 形式   wx.chooseAddress
 * 无 参数
 */
export const tochooseAddress = () => {
  return new Promise((resolve, reject) => {
    wx.chooseAddress({
      success: (res) => {
        resolve(res);
        console.log("获取地址成功");
      },
      fail: (err) => {
        reject(err);
        console.log("获取地址失败");
      },
      complete: () => {},
    });
  });
};
///////////////////////////
/**
 *@method wx.cloud.database().collection().add()
 *@author 作者
 *@version 版本号
 *@param {string} collection 需要操作的数据表
 *@param {object} data 添加的数据
 *@return {类型} 无
 */
export const databaseadd = ({ collection, adddata }) => {
  return new Promise((resolve, reject) => {
    wx.cloud
      .database()
      .collection(collection)
      .add({
        data: adddata,
        success: (res) => {
          console.log("数据添加成功");
          resolve(res);
          console.log(res);
        },
        fail: (err) => {
          reject(err);
        },
        complete: () => {
          console.log("promise 形式  add");
          console.log("-------");
        },
      });
  });
};
///////////////////////////
/**
 *@method wx.cloud.database().collection().update()
 *@author 作者
 *@version 版本号
 *@param {string} collection 需要操作的数据表
 *@param {object} data 添加的数据
 *@return {类型} 无
 */
export const databaseupdate = ({ collection, wherecondition, data }) => {
  return new Promise((resolve, reject) => {
    wx.cloud
      .database()
      .collection(collection)
      .where(wherecondition)
      .update({
        data,
        success: (res) => {
          console.log("数据push更新成功");
          resolve(res);
          console.log(res);
        },
        fail: (err) => {
          reject(err);
        },
        complete: () => {
          console.log("promise 形式  update(push)");
          console.log("-------");
        },
      });
  });
};
///////////////////////////
/**
 *@method wx.cloud.callFunction
 *@param {pamas0} pamas0 调用云函数名
 *@return {类型} 无
 */
export const callFunction = (pamas0) => {
  return new Promise((resolve, reject) => {
    wx.cloud.callFunction({
      // 云函数名称
      name: pamas0,
      // 传给云函数的参数
      // data: {
      //   a: 1,
      //   b: 2,
      // },
      success: (res) => {
        console.log("获取id成功");
        // console.log(res);
        resolve(res.result);
      },
      fail: (err) => {
        console.log(err);
        reject(err);
      },
    });
  });
};
///////////////////////////
/**
 *@method wx.cloud.database.where.get
 *@param {pamas0} pamas0 调用云函数名
 *@return {类型} 无
 */
export const databasewhere = ({ collection, condition }) => {
  //console.log("condition", condition);
  return new Promise((resolve, reject) => {
    wx.cloud
      .database()
      .collection(collection)
      .where(condition)
      .get({
        success: (res) => {
          console.log("查询成功", res);
          resolve(res);
        },
        fail: (err) => {
          console.log("查询失败", err);
          reject(err);
        },
      });
  });
};
