// pages/load/load.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**
     * 页面的初始数据
     */
    data: {
    },
    bindGetUserInfo (e) {
      if (e.detail.userInfo != null)
      {
        console.log(e.detail.userInfo);
        getApp().globalData.userInfo = e.detail.userInfo;
        wx.redirectTo({
          url:"/pages/login/login"
        })
      }
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
// 查看是否授权
wx.getSetting({
  success (res){
    if (res.authSetting['scope.userInfo']) {
      // 已经授权，可以直接调用 getUserInfo 获取头像昵称
      wx.getUserInfo({
        success: function(res) {
          // console.log(res.userInfo);
          getApp().globalData.userInfo = res.userInfo;
          // wx.redirectTo({
          //   url:"/pages/login/login"
          // })
        }
      })
    }
  }
})
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