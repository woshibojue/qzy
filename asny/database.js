export const database = (pamas, pamas2) => {
  return new Promise((resolve, reject) => {
    console.log(pamas);
    wx.cloud
      .database()
      .collection(pamas)
      .doc(pamas2)
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
