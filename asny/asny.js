/**
 *  promise 形式  wx.getStorage
 * @param {object} param0 参数
 */
export const getStorageSync = ({ key }) => {
  return new Promise((resolve, reject) => {
<<<<<<< HEAD
    wx.getStorage({
      key: "userinfo",
      success: (res) => {
        // console.log(res.data);
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
=======
    wx.getStorageSync({
      key: key,
      success: (result) => {
        console.log(result.data);
      },
      fail: (err) => {
        reject(err);
      },
      complete: () => {
        console.log("promise 形式  wx.getStorage");
        console.log("传入参数key:", key);
        console.log("-------");
>>>>>>> 7969b4b72fa8aa6403a286535de250d5218b958e
      },
    });
  });
};
///////////////////////////
/**
 *  promise 形式   wx.getUserProfile
 * 无 参数
 */
export const getUserProfile = () => {
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
 *@method wx.cloud.database().collection().add()
 *@author 作者
 *@version 版本号
 *@param {string} collection 数据表
 *@param {object} data 数据对
 *@return {类型} 无
 */
export const databaseadd = ({ collection, data }) => {
  return new Promise((resolve, reject) => {
    wx.cloud
      .database()
      .collection(collection)
      .add({
        data,
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
