Page({
  /**
   * 页面的初始数据
   */
  data: {
    animationDataSel: {}, //动态弹出框所需参数
    selHidden: true, //模态框是否隐藏
    btnType: "buy-ban", //确定按钮禁用标记
    minusBan: "ban", //减号禁用标记
    plusBan: "ban", //加号禁用标记
    normalImg: "../../dist/images/1.jpg", //商品初始化时显示的图片
    selImg: "../../dist/images/1.jpg", //当前选择的商品图片
    selPrice: "350.00", //当前选择的商品价格
    selTypeList: "-", //当前选择的商品类别详情
    selStock: "-", //当前选择的商品库存
    selNum: 1, //要购买的数量
    all_ids: [], //sku相关数据，用于后续操作
    key: [
      [
        {
          val: "塞尔达传说",
          state: "",
          name: "游戏",
          images: "../../icon/cart-o.png",
        },
        {
          val: "马里欧赛车",
          state: "",
          name: "游戏",
          images: "../../dist/images/2.jpg",
        },
        {
          val: "马里欧奥德赛",
          state: "",
          name: "游戏",
          images: "../../dist/images/3.jpg",
        },
        {
          val: "异度之刃2",
          state: "",
          name: "游戏",
          images: "../../dist/images/4.jpg",
        },
      ],
      [
        { val: "中国大陆", name: "版本", state: "" },
        { val: "日版", name: "版本", state: "" },
        { val: "美版", name: "版本", state: "" },
        { val: "欧版", name: "版本", state: "" },
      ],
      [
        { val: "东风快递", name: "快递", state: "" },
        { val: "美团外卖", name: "快递", state: "" },
        { val: "EMS", name: "快递", state: "" },
        { val: "顺丰快递", name: "快递", state: "" },
      ],
    ], //商品类型相关数据，一般通过调用服务端接口获取（这里可以自行修改数据，我写的数据比较简略）
    sku_list: [
      {
        attrs: "塞尔达传说|日版|EMS",
        num: 10,
        price: "330.00",
        sku_id: "a1",
      },
      {
        attrs: "塞尔达传说|欧版|东风快递",
        num: 6,
        price: "350.00",
        sku_id: "a2",
      },
      {
        attrs: "马里欧赛车|中国大陆|美团外卖",
        num: 11,
        price: "295.00",
        sku_id: "a3",
      },
      {
        attrs: "马里欧奥德赛|中国大陆|EMS",
        num: 3,
        price: "305.00",
        sku_id: "a4",
      },
      {
        attrs: "异度之刃2|日版|顺丰快递",
        num: 1,
        price: "450.00",
        sku_id: "a5",
      },
    ], ////商品详情数据，一般通过调用服务端接口获取
  },
  minus: function () {
    //减少购买数量
    let that = this;
    if (that.data.minusBan == "ban") {
      return;
    } else {
      that.setData({
        selNum: that.data.selNum - 1,
      });
      if (that.data.selNum == 1) {
        that.setData({
          minusBan: "ban",
        });
      }
    }
    if (that.data.selNum == that.data.selStock) {
      that.setData({
        plusBan: "ban",
      });
    } else {
      that.setData({
        plusBan: "",
      });
    }
  },
  plus: function () {
    //增加购买数量
    let that = this;
    if (that.data.plusBan == "ban") {
      return;
    } else {
      that.setData({
        selNum: that.data.selNum + 1,
      });
      if (that.data.selNum == that.data.selStock) {
        that.setData({
          plusBan: "ban",
        });
      }
      if (that.data.selNum == 1) {
        that.setData({
          minusBan: "ban",
        });
      } else {
        that.setData({
          minusBan: "",
        });
      }
    }
  },
  buy: function () {
    //立即购买按钮触发
    this.showSelBox();
  },
  confirm: function () {
    //弹窗确认按钮触发
    if (this.data.btnType == "buy-ban") {
      return;
    } else {
      let sku_id = this.data.sku_id;
      let selNum = this.data.selNum;
      wx.showToast({
        title: `商品sku_id是${sku_id},购买数量为${selNum}`,
        icon: "none",
        duration: 2000,
      });
      this.hiddenSel();
    }
  },
  hiddenSel: function () {
    //隐藏选项
    let that = this;
    let animation = wx.createAnimation({
      //动画
      duration: 300, //动画持续时间
      timingFunction: "linear", //动画的效果 动画从头到尾的速度是相同的
      transformOrigin: "50% 50% 0",
    });
    let systemInfo = wx.getSystemInfoSync();
    let px = (980 / 750) * systemInfo.windowWidth;
    animation.translateY(px).step(); //在Y轴偏移tx，单位px
    this.setData({
      animationDataSel: animation.export(),
      selHidden: true,
    });
  },
  showSelBox: function (e) {
    //显示选项
    let that = this;
    let systemInfo = wx.getSystemInfoSync();
    let px = (980 / 750) * systemInfo.windowWidth;

    this.animation.translateY(-px).step(); //在Y轴偏移tx，单位px
    this.setData({
      animationDataSel: that.animation.export(),
      selHidden: false,
    });
  },
  //获取所有包含指定节点的路线
  filterProduct: function (ids) {
    let result = [];
    this.data.sku_list.forEach(function (v, k) {
      let _attr = "|" + v["attrs"] + "|";
      let _all_ids_in = true;
      for (k in ids) {
        if (_attr.indexOf("|" + ids[k] + "|") == -1) {
          _all_ids_in = false;
          break;
        }
      }
      if (_all_ids_in) {
        result.push(v);
      }
    });
    return result;
  },
  //获取经过已选节点 所有线路上的全部节点
  // 根据已经选择得属性值，得到余下还能选择的属性值
  filterAttrs: function (ids) {
    var products = this.filterProduct(ids);
    var result = [];
    products.forEach(function (v, k) {
      result = result.concat(v["attrs"].split("|"));
    });
    return result;
  },
  //获取选中的id数组
  getSelAttrId: function () {
    let list = [];
    for (let i = 0; i < this.data.key.length; i++) {
      for (let j = 0; j < this.data.key[i].length; j++) {
        if (this.data.key[i][j].state == "sel") {
          list.push(this.data.key[i][j].val);
        }
      }
    }
    return list;
  },
  handleClick: function (e) {
    //选择商品类型
    let that = this;
    let state = e.currentTarget.dataset.state;
    let trindex = e.currentTarget.dataset.trindex;
    let tdindex = e.currentTarget.dataset.tdindex;
    if (state == "ban") {
      //被锁定
      return;
    } else if (state == "sel") {
      //被选择取反
      this.data.key[trindex][tdindex].state = "";
      if (trindex == 0) {
        let selImg = this.data.normalImg;
        this.setData({
          selImg,
        });
      }
    } else if (state == "") {
      //选择
      //优化结果
      for (let i = 0; i < this.data.key[trindex].length; i++) {
        if (this.data.key[trindex][i].state == "sel") {
          this.data.key[trindex][i].state = "";
          this.setData({
            key: this.data.key,
          });
          break;
        }
      }
      this.data.key[trindex][tdindex].state = "sel";
      if (trindex == 0) {
        let selImg = this.data.key[0][tdindex].images;
        this.setData({
          selImg,
        });
      }
    }
    this.setData({
      key: this.data.key,
    });
    let select_ids = this.getSelAttrId(); //已选择的ids数组
    let all_ids = this.filterAttrs(select_ids); //已选择包含的所有节点，且有库存
    this.setData({
      all_ids,
    });
    this.set_block();
    this.update();
    that.setData({
      selNum: 1,
    });
    let selLength = 0;
    for (let s = 0; s < that.data.key.length; s++) {
      for (let e = 0; e < that.data.key[s].length; e++) {
        if (that.data.key[s][e].state == "sel") {
          selLength++;
          break;
        }
      }
    }
    if (selLength == that.data.key.length) {
      that.setData({
        btnType: "",
        selTypeList: that.data.all_ids.join("、"),
        selStock: 1,
      });
      let attrsVal = that.data.all_ids.join("|");
      for (let i = 0; i < that.data.sku_list.length; i++) {
        if (that.data.sku_list[i].attrs == attrsVal) {
          that.setData({
            selStock: that.data.sku_list[i].num,
            sku_id: that.data.sku_list[i].sku_id,
            selPrice: that.data.sku_list[i].price,
          });
          break;
        }
      }
      if (that.data.selNum > 1) {
        that.setData({
          minuslBan: "",
        });
      } else {
        that.setData({
          minuslBan: "ban",
        });
      }
      if (that.data.selNum >= that.data.selStock) {
        that.setData({
          plusBan: "ban",
        });
      } else {
        that.setData({
          plusBan: "",
        });
      }
    } else {
      that.setData({
        btnType: "buy-ban",
        selTypeList: "-",
        selStock: "-",
        minusBan: "ban",
        plusBan: "ban",
      });
    }
  },
  set_block: function () {
    //sku相关操作
    let list = [];
    let listTemp = [];
    for (let a = 0; a < this.data.key.length; a++) {
      listTemp.push(a);
    }
    for (let k = 0; k < this.data.key.length; k++) {
      for (let z = 0; z < this.data.key[k].length; z++) {
        if (this.data.key[k][z].state == "sel") {
          list.push(k);
          break;
        }
      }
    }
    let aSet = new Set(listTemp);
    let bSet = new Set(list);
    let differenceNew = Array.from(
      new Set(listTemp.concat(list).filter((v) => aSet.has(v) && !bSet.has(v)))
    );
    for (let i = 0; i < differenceNew.length; i++) {
      for (let j = 0; j < this.data.key[differenceNew[i]].length; j++) {
        if (this.data.key[differenceNew[i]][j].state != "sel") {
          if (
            this.data.all_ids.includes(this.data.key[differenceNew[i]][j].val)
          ) {
            this.data.key[differenceNew[i]][j].state = "";
          } else {
            this.data.key[differenceNew[i]][j].state = "ban";
          }
        }
      }
    }
    this.setData({
      key: this.data.key,
    });
  },
  update: function () {
    //sku相关操作
    let that = this;
    let list = [];
    let select_ids = this.getSelAttrId();
    for (let i = 0; i < this.data.key.length; i++) {
      for (let j = 0; j < this.data.key[i].length; j++) {
        if (this.data.key[i][j].state == "sel") {
          list.push(i);
          break;
        }
      }
    }
    for (let a = select_ids.length - 1; a >= 0; a--) {
      let select_ids2 = this.del_array_val(select_ids, select_ids[a]);
      let all_ids = this.filterAttrs(select_ids2);
      that.data.key[list[a]].forEach((v1, k1) => {
        if (v1.state != "sel") {
          if (all_ids.includes(v1.val)) {
            that.data.key[list[a]][k1].state = "";
          } else {
            that.data.key[list[a]][k1].state = "ban";
          }
        }
      });
    }
    this.setData({
      key: this.data.key,
    });
  },
  del_array_val: function (arr, val) {
    //去除 数组 arr中的 val ，返回一个新数组
    var a = [];
    for (let k in arr) {
      if (arr[k] != val) {
        a.push(arr[k]);
      }
    }
    return a;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that = this;
    that.animation = wx.createAnimation({
      //动画
      duration: 300, //动画持续时间
      timingFunction: "linear", //动画的效果 动画从头到尾的速度是相同的
      transformOrigin: "50% 50% 0",
    });
  },
});
