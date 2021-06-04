// pages/login/login.js
var app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'',
    phoneNumber: '',
    password: ''
  },

    //获取用户的用户名
  getUserName: function (e) {
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
  getPassword: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  //登陆状态
  login: function(e){
     // 1.判断用户输入数据的合法性：不能为空，手机号应该是11位
    var that = this;
    // 手机号为空
    if (that.data.userName == '') {
      wx.showModal({
        title: '亲！',
        content: '请输入用户名',
        showCancel: false,
        success(res) { }
      })
    }
    else if (that.data.phoneNumber == '') {
      wx.showModal({
        title: '亲！',
        content: '请输入手机号',
        showCancel: false,
        success(res) { }
      })
    }
    // 密码为空
    else if (that.data.password == '') {
      wx.showModal({
        title: '亲！',
        content: '请输入密码',
        showCancel: false,
        success(res) { }
      })
    }
    // 手机号长度为空
    else if (that.data.phoneNumber.length != 11) {
      wx.showModal({
        title: '亲！',
        content: '请输入正确的手机号',
        showCancel: false,
        success(res) { }
      })
    }
    else {
      console.log(that.data)}
    },
    // 2.把数据发送到后端

    // 3.页面跳转
      // 跳转到注册界面
  goToRegister: function () {
    wx.navigateTo({
      url: "/pages/register/register"
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