// pages/detailpage/detailpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  //   imageList:[{
  //     "showImg":"/Image/img/le5.jpg"   
  //   },
  // {
  //   "showImg":"/Image/img/le3.jpg"
  // }],
  imageList:["/Image/img/le5.jpg","/Image/img/le5.jpg","/Image/img/le3.jpg"],
  textList:[{
    "title":"海花岛的一天",
    "articles":"今天学了跳舞，我不会跳，但我要为别人的梦想努力，很想下班，什么时候可以下班？？",
    love:true,
    "number":"124"
  }],

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