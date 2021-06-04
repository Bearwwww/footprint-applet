// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftList:[{
      "cover":"/Image/cover/cloud.jpg",
      "title":"白云白云白云白云白云",
      "img":"/Image/img/teacherle.JPG",
      "name":"利路修",
      love:true,
      number:"9823"
    },
    {
      "cover":"/Image/cover/cloud.jpg",
      "title":"白云",
      "img":"/Image/img/teacherle.JPG",
      "name":"利路修",
      love:false,
      "number":"0"
    }],

    rightList:[{
      "cover":"/Image/cover/cloud.jpg",
      "title":"白云白云白云白云白云白云白云白云白云白云白云白云白云白云白云白云白云白云",
      "img":"/Image/img/teacherle.JPG",
      "name":"利路修",
      "love":false,
      "number":0
    },
    {
      "cover":"/Image/cover/le4.JPG",
      "title":"白云",
      "img":"/Image/img/teacherle.JPG",
      "name":"利路修"
    },
    {
      "cover":"/Image/cover/cloud.jpg",
      "title":"白云",
      "img":"/Image/img/teacherle.JPG",
      "name":"利路修"
    },
    {
      "cover":"/Image/cover/cloud.jpg",
      "title":"白云",
      "img":"/Image/img/teacherle.JPG",
      "name":"利路修"
    }
  ]
},
  loveleft:function(e){
    console.log("love function");
    console.log(e);
    var leftListNew = this.data.leftList;

    if (leftListNew[e.target.dataset.index].love == true){
      leftListNew[e.target.dataset.index].love = false;
      leftListNew[e.target.dataset.index].number--;
    }else{
      leftListNew[e.target.dataset.index].love = true;
      leftListNew[e.target.dataset.index].number++;
    }
    // this.data.leftList = leftListNew;
    this.setData({
      leftList:leftListNew
    }) 
  },

  loveright:function(e){
    console.log("love function");
    console.log(e);
    var rightListNew = this.data.rightList;

    if (rightListNew[e.target.dataset.index].love == true){
      rightListNew[e.target.dataset.index].love = false;
      rightListNew[e.target.dataset.index].number--;
    }else{
      rightListNew[e.target.dataset.index].love = true;
      rightListNew[e.target.dataset.index].number++;
    }
    this.setData({
      rightList:rightListNew
    })
  },

  goToHomePage:function (e) {
    
  },
  goToPublish:function (e) {
    wx.navigateTo({
      url: '/pages/publish/publish',
    })
  },
  goToMine:function (e) {
    wx.navigateTo({
      url: '/pages/mine/mine',
    })
  },
  goToDetailPage:function(e) {
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