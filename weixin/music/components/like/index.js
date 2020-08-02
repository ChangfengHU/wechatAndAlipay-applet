// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      // like:{
      //   type:Boolean
        
      // },
      // count:{
      //   type:Number
      // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count:0,
    yesSrc:"images/like.png",
    noSrc:"images/like@dis.png",
  },

  // onLoad:function(options){
  //   wx.request({
  //     url: 'http://47.96.141.35/article/searchMaterial',
  //     success:function(res){
  //       console.log(res)
  //     }
  //   })



  // },

  /**
   * 组件的方法列表
   */
  methods: {
    onlike:function(e) {
      console.log(this.properties);
      console.log(this.data);
      let like=this.properties.like
      console.log(like);
      like=!like;
      let count=this.properties.count
      count=like?count+1:count-1
      this.setData({
        count :count,
        like:like
      })
    }

  }
})
