// pages/login/login.js
var app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNumber: '',
    password: ''
  },

    //获取用户的用户名
  getPasswordInpout: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },

  //获取用户的电话号码
  getPhoneNumber: function (e) {
    this.setData({
      phoneNumber: e.detail.value
    })
  },

  //获取密码
  getPasswordInpout: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 跳转到注册界面
  goToRegister: function () {
    wx.navigateTo({
      url: "/pages/register/register"
    })
  },

  //登陆状态
  login: function(e){
    
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