// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      pic: "/Image/icon/bear.jpg",
      username: "一只熊w",
      location:"上海",
      gender: 0
    },


    leftList: [{
        cover: "/Image/icon/bear.jpg",
        title: "描述服务和协议之间的关系 协议可以自由改变；服务一般不变化",
        name: "一只熊w",
        image: "/Image/icon/bear.jpg",
        love: true,
        number: 1234
      },
      {
        cover: "/Image/icon/bear.jpg",
        title: "是呀",
        name: "一只熊w",
        image: "/Image/icon/bear.jpg",
        love: false,
        number: 123
      },
      {
        cover: "/Image/icon/bear.jpg",
        title: "描述服务和协议之间的关系 协议可以自由改变；服务一般不变化",
        name: "一只熊w",
        image: "/Image/icon/bear.jpg",
        love: true,
        number: 123
      },
    ],

    rightList: [{
      cover: "/Image/icon/bear.jpg",
      title: "描述服务和协议之间的关系 协议可以自由改变；服务一般不变化",
      name: "一只熊w",
      image: "/Image/icon/bear.jpg",
      love: true,
      number: 123,

    }],

  },

  loveleft: function (e) {
    console.log("love function");
    console.log(e);
    var leftListNew = this.data.leftList;

    if (leftListNew[e.target.dataset.index].love == true) {
      leftListNew[e.target.dataset.index].love = false;
      leftListNew[e.target.dataset.index].number--;
    } else {
      leftListNew[e.target.dataset.index].love = true;
      leftListNew[e.target.dataset.index].number++;
    }
    // this.data.leftList = leftListNew;
    this.setData({
      leftList: leftListNew
    })

  },

  loveright: function (e) {
    console.log("love function");
    console.log(e);
    var rightListNew = this.data.rightList;

    if (rightListNew[e.target.dataset.index].love == true) {
      rightListNew[e.target.dataset.index].love = false;
      rightListNew[e.target.dataset.index].number--;
    } else {
      rightListNew[e.target.dataset.index].love = true;
      rightListNew[e.target.dataset.index].number++;
    }
    this.setData({
      rightList: rightListNew
    })
  },

  //获取用户名
  getUserName: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },

  goToHomePage: function () {
    wx.redirectTo({
      url: '/pages/homepage/homepage',
    })
  },

  goToPublish: function () {
    wx.navigateTo({
      url: '/pages/publish/publish',
    })
  },

  goToMine: function () {

  },

  goToDetailPage: function () {
    wx.navigateTo({
      url: '/pages/detailpage/detailpage',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})