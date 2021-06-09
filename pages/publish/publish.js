const util = require("../../utils/util")

// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    content: "",
    imageList: []
  },

  //获取标题
  getTitle: function (e) {
    this.setData({
      title: e.detail.value
    })
  },

  //获取标题
  getContent: function (e) {
    this.setData({
      content: e.detail.value
    })
  },

  //跳转到主页
  goToHomePage: function () {
    wx.showToast({
      title: '发布成功',
      icon: "success",
      success(e){
        wx.navigateBack({
          delta: 1,
        })
      }
    })
    wx.navigateTo({
      url: "/pages/homepage/homepage"
    })
  },

  updateImageList: function (event) {
    console.log(event);
    this.data.imageList = event.detail.all;
    console.log(this.data.imageList);
  },

  publishArticle: function (e) {
    var that = this;
    // 标题为空
    if (this.data.title == ""){
      wx.showToast({
        title: '标题为空',
        icon: "error",
      })
    }
    // 内容为空
    else if (this.data.content == "") {
      wx.showToast({
        title: '内容为空',
        icon: "error",
      })
    }
    // 用户没有选择图片
    else if (this.data.imageList.length == 0) {
      wx.showToast({
        title: '图片为空',
        icon: "error",
      })
    } 
    else {
      // 先上传文章内容
      wx.request({
        url: getApp().globalData.server + ":20003/json/article",
        data: {
          user_id:getApp().globalData.userInfo.userId,
          encrypt_code:getApp().globalData.userInfo.password,
          title:that.data.title,
          content:that.data.content,
          timestamp:util.getCurrTimeStamp(),
          image_num:that.data.imageList.length
        },
        method: 'post',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success(res){
          console.log(res);
          for (var index = 0; index < that.data.imageList.length; index++){
            console.log("articleId"+res.data.data+"index:"+index);
            that.uploadImage(index, res.data.data);
          }
          wx.showToast({
              title: '发布成功',
              icon: "success",
              duration: 5000
          })
          wx.navigateBack({
            delta: 1,
          })
        }
        })
    }
  },

  uploadImage: function (index,article_id) {
    var that = this
    wx.uploadFile({
      filePath: that.data.imageList[index],
      name: 'image_content',
      url: getApp().globalData.server +':20004/image/image',
      formData: ({
        //上传图片所要携带的参数
        user_id: getApp().globalData.userInfo.userId,
        encrypt_code: getApp().globalData.userInfo.password,
        article_id: article_id,
        index: index + 1
      }),
      success: function (res) {
        console.log("上传成功");
    }
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