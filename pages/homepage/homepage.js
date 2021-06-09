// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingHidden: false,
    leftList: null,
    rightList: null,
  },

  loveleft: function (e) {
    console.log("love function");
    console.log(e);
    var leftListNew = this.data.leftList;

    if (leftListNew[e.target.dataset.index].isLike == '1') {
      leftListNew[e.target.dataset.index].isLike = '0';
      leftListNew[e.target.dataset.index].totalLike--;

    } else {
      leftListNew[e.target.dataset.index].isLike = '1';
      leftListNew[e.target.dataset.index].totalLike++;
    }
    this.setData({
      leftList: leftListNew
    })
  },

  loveright: function (e) {
    console.log("love function");
    console.log(e);
    var that = this;
    var rightListNew = this.data.rightList;
    console.log(rightListNew[e.target.dataset.index]);
    
    if (rightListNew[e.target.dataset.index].isLike == '1') {
      console.log(rightListNew[e.target.dataset.index].isLike);
      wx.request({
        url: getApp().globalData.server + ":20003/json/dislike",
        data: {
          user_id:getApp().globalData.userInfo.userId,
          encrypt_code:getApp().globalData.userInfo.password,
          article_id:rightListNew[e.target.dataset.index].articleId
        },
        method: 'post',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success(res){
          console.log(res);
          if (res.data.code == 0){
            rightListNew[e.target.dataset.index].isLike = '0';
            rightListNew[e.target.dataset.index].totalLike--;
            that.setData({
              rightList: rightListNew
            })
          }else if (res.data.code == 4){
            wx.showToast({
              title: '文章不存在',
              icon:'error'
            })
          } else if (res.data.code == 7){
            wx.showToast({
              title: '非法访问',
              icon:'error'
            })
          }else{
            wx.showToast({
              title: '未知错误',
              icon:'error'
            })
          }      
        },
        fail(res){
          wx.showToast({
            title: '网络错误',
            icon:'error'
          })
        }
      })
    } else {
      wx.request({
        url: getApp().globalData.server + ":20003/json/like",
        data: {
          user_id:getApp().globalData.userInfo.userId,
          encrypt_code:getApp().globalData.userInfo.password,
          article_id:rightListNew[e.target.dataset.index].articleId
        },
        method: 'post',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success(res){
          if(res.data.code ==0){
            rightListNew[e.target.dataset.index].isLike = '1';
            rightListNew[e.target.dataset.index].totalLike++;
            that.setData({
              rightList: rightListNew
            })
          }else if (res.data.code == 4){
            wx.showToast({
              title: '文章不存在',
              icon:'error'
            })
          } else if (res.data.code == 7){
            wx.showToast({
              title: '非法访问',
              icon:'error'
            })
          }else{
            wx.showToast({
              title: '未知错误',
              icon:'error'
            })
          }     
        },
        fail(res){
          wx.showToast({
            title: '网络错误',
            icon:'error'
          })
        }
      })
      
    }
   
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
      index = e.target.dataset.index * 2 + 1;
    // 用户点击左侧文章
    else
      index = e.target.dataset.index * 2;
    // 1是左侧 0是右侧
    wx.navigateTo({
      url: '/pages/detailpage/detailpage?index=' + index,
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
        user_id:getApp().globalData.userInfo.userId,
        encrypt_code:getApp().globalData.userInfo.password
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
            leftListTmp.push(res.data.data[i]);
            else
            rightListTmp.push(res.data.data[i]);
            // rightListTmp.push(res.data.data[i+5]);
          }
          that.setData({
            rightList: rightListTmp,
            leftList: leftListTmp,
            loadingHidden: true
          })
          wx.setStorage({
            key: "articleList",
            data: res.data.data
          })
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