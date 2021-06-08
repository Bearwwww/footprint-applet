// pages/detailpage/detailpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:null,
    imageList:[],
    article:null
  },
  lovebottom:function(e){
    console.log("love function");
    console.log(e);
    var texteListNew = this.data.textList;

    if (textListNew[e.target.dataset.index].love == true){
      textListNew[e.target.dataset.index].love = false;
      textListNew[e.target.dataset.index].number--;
    }else{
      textListNew[e.target.dataset.index].love = true;
      textListNew[e.target.dataset.index].number++;
    }
    this.setData({
      textList:textListNew
    }) 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 存储homepage跳转过来时携带的数据
    this.setData({
      index:options.index
    })
    console.log("您点击的文章index为:"+options.index);
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
    var that = this;
    var article = null;
    var imageList = [];
    var imageserver = getApp().globalData.imgserver;
    // 获取文章信息
    wx.getStorage({
      key:'articleList',
      success:function(res){
        console.log("获取本地数据成功！");
        console.log(res);
        article = res.data[that.data.index];
        // 生成用户头像地址
        article['avatarUrl'] = imageserver +"/"+article.userId+"/0/0.png";
        // 获取图片列表
        for (var i = 1;i<=article.imageNum;i++){
          imageList.push(imageserver+"/"+article.userId+"/"+article.articleId+"/"+i+".png");
        }
        that.setData({
          article:article,
          imageList:imageList
        })
      }
    })
   
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