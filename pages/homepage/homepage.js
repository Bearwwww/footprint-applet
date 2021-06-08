// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftList: null,
    rightList: null,
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

  goToHomePage: function (e) {

  },
  goToPublish: function (e) {
    wx.navigateTo({
      url: '/pages/publish/publish',

    })
  },
  goToMine: function (e) {
    wx.redirectTo({
      url: '/pages/mine/mine',
    })
  },
  goToDetailPage: function (e) {
    console.log(e);
    // 保存当前点击文章在文章数组中真正的下标
    var index;
    // 用户点击右侧文章
    if (e.detail.x > 231)
      index = e.target.dataset.index*2+1;
    // 用户点击左侧文章
    else
      index = e.target.dataset.index*2; 
    // 1是左侧 0是右侧
    wx.navigateTo({
      url: '/pages/detailpage/detailpage?index='+index,
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
    var that = this;
    // 随机获取文章
    wx.request({
      url: getApp().globalData.server + ":20003/json/random_articles",
      data: {
        // user_id:getApp().globalData.userInfo.userId,
        // encrypt_code:getApp().globalData.userInfo.password
        user_id: "4",
        encrypt_code: "T4mLlqC/Z6Ju27YUIWkMxg=="
      },
      method: 'get',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        // 获取文章成功
        if (res.data.code == 0) {
          console.log(123);
          console.log(res);
          // 构造文章数据
          var leftListTmp = [];
          var rightListTmp = [];
          var imgserver = getApp().globalData.imgserver;
          for (var i = 0; i < res.data.data.length; i++) {
            res.data.data[i]["coverUrl"] = imgserver + "/" +
              res.data.data[i].userId + "/" + res.data.data[i].articleId + "/1.png";
            res.data.data[i]["avatarUrl"] = imgserver + "/" +
              res.data.data[i].userId + "/0/0.png";
            console.log(res.data.data[i].coverUrl);
            if (i % 2 == 0)
              rightListTmp.push(res.data.data[i]);
            else
              leftListTmp.push(res.data.data[i]);
            // rightListTmp.push(res.data.data[i+5]);
          }
          that.setData({
            rightList: rightListTmp,
            leftList: leftListTmp
          })
          wx.setStorage({
            key: "articleList",
            data: res.data.data
          })
          setTimeout(function () {
            wx.hideLoading();
            wx.showToast({
              title: '加载中',
              icon: "loading",
            })
          }, 600)
        } else if (res.data.code == 7) {
          wx.showToast({
            title: '非法访问',
            icon: "error",
          })
        } else {
          wx.showToast({
            title: '未知错误',
            icon: "error",
          })
        }

      }

    })

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