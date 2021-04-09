/**
 *  promise 形式  wx.getStorage
 * @param {object} param0 参数
 */
export const getStorageSync = ({ key }) => {
  return new Promise((resolve, reject) => {
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
        reject(err);
      },
      complete: () => {
        console.log("promise 形式  wx.getStorage");
        console.log("-------");
      },
    });
  });
};
