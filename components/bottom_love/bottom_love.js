// components/bottom_love/bottom_love.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    totalLikeNum:{
      type:Number,
      value:0
    },
    commentNum:{
      type:Number,
      value:0
    },
    shareNum:{
      type:Number,
      value:0
    },
    collectNum:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    collectNum:0,
    shareNum:0,
    commentNum:0,
    totalLikeNum:0
  },

  ready:function () {
    this.setData({
      collectNum:this.properties.collectNum,
      shareNum:this.properties.shareNum,
      commentNum:this.properties.collectNum,
      totalLikeNum:this.properties.totalLikeNum
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
