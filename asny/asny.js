/**
 *  promise 形式  wx.getStorage
 * @param {object} param0 参数
 */
export const getStorageSync = ({ key }) => {
  return new Promise((resolve, reject) => {
    wx.getStorage({
      key: "userinfo",
      success: (res) => {
        // console.log(res.data);
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
};
///////////////////////////
