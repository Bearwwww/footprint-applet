// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    phoneNumber: '',
    password: '',
    paswwordAgain: '',
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

  //获取确认密码
  getPasswordAgain: function (e) {
    this.setData({
      passwordAgain: e.detail.value
    })
  },

  // getVerificationCode: function (e) {
  //   this.setData({
  //     verificationCode: e.detail.value
  //   })
  // },

  //注册状态判断
  register: function (e) {
    var that = this;
    if (that.data.userName == '') {
      wx.showModal({
        title: '亲！',
        content: '请输入用户名',
        showCancel: false,
        success(res) {}
      })
    } else if (that.data.phoneNumber == '') {
      wx.showModal({
        title: '亲！',
        content: '请输入手机号',
        showCancel: false,
        success(res) {}
      })
    } else if (that.data.phoneNumber.length != 11) {
      wx.showModal({
        title: '亲！',
        content: '请输入正确的手机号',
        showCancel: false,
        success(res) {}
      })
    } else if (that.data.password == '') {
      wx.showModal({
        title: '亲！',
        content: '请输入密码',
        showCancel: false,
        success(res) {}
      })
    } else if (that.data.password == '') {
      wx.showModal({
        title: '亲！',
        content: '请输入确认密码',
        showCancel: false,
        success(res) {}
      })
    } else if (that.data.password != that.data.passwordAgain) {
      wx.showModal({
        title: '亲！',
        content: '两次输入密码不一致！',
        showCancel: false,
        success(res) {}
      })
    } else if (that.data.verificationCode == '') {
      wx.showModal({
        title: '亲！',
        content: '请输入验证码',
        showCancel: false,
        success(res) {}
      })
    } else {
      wx.request({
        // url: getApp().globalData.server + ":20002/json/user",
        url:"http:127.0.0.1:8080/1",
        data: {
          user_name: that.data.userName,
          phone: that.data.phoneNumber,
          password: that.data.password,
          face_url: "123",
          gender:getApp().globalData.gender ,
          city: "qq",
          province: "dd"
        },
        header:{
          'content-type':'application/x-www-form-urlencoded'
        },
        method:"post",
        success(res){
          console.log("success")
          console.log(res)
          if(res.data.code ==0){
            getApp().globalData.userInfo = res.data.data;
                wx.showToast({
                  title: '注册成功',
                  icon:"success",
                  duration: 3000,
                  success(e){
                    wx.redirectTo({
                      url: '/pages/login/login',
                    })
                  }
                })
          }
          else if (res.data.code == 3) {
            wx.showToast({
              title: '该手机号已注册过',
              icon: "error",
              duration: 3000
            })
            
          }
        }
      })
      console.log(that.data)
    }

  },

  // 跳转到登录界面
  goToLogin: function () {
    wx.navigateTo({
      url: "/pages/login/login"
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