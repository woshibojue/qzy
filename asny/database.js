export const database = (pamas) => {
  return new Promise((resolve, reject) => {
    console.log(pamas);
    wx.cloud
      .database()
      .collection(pamas)
      .get({
        success: (result) => {
          resolve(result);
          console.log("获取成功", result);
        },
        fail: (err) => {
          reject(err);
          console.log("获取失败", err);
        },
        complete: () => {},
      });
  });
};
