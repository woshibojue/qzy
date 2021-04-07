/**
 *  promise 形式  wx.getStorage
 * @param {object} param0 参数
 */
export const getStorageSync = ({ key }) => {
  return new Promise((resolve, reject) => {
    console.log("aaa");
    console.log(key);
    wx.getStorageSync({
      key: key,
      success: (result) => {
        // resolve("获取成功", result);
        console.log(result.data);
      },
      fail: (err) => {
        reject("获取失败", err);
        console.log("key", key);
      },
      complete: () => {
        console.log("key", key);
      },
    });
  });
};
///////////////////////////
