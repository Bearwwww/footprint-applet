// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    content: "",
    photo: "/Image//icon/bear.jpg",
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
    // 用户没有选择图片
    if (this.data.imageList.length == 0) {

    } else {
      for (var index = 0; index < this.data.imageList.length; index++)
        this.uploadImage(index);
    }
  },

  uploadImage: function (index) {
    var that = this
    wx.uploadFile({
      filePath: that.data.imageList[index],
      name: 'image_content',
      url: 'http://127.0.0.1:20004/image/article_image',
      formData: ({
        //上传图片所要携带的参数
        user_id: "4",
        encrypt_code: 'T4mLlqC/Z6Ju27YUIWkMxg==',
        article_id: "4",
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