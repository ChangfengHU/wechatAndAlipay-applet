import {config} from "../config.js"


const tips = {
  1: '抱歉，出现了一个错误',
  1005:'appkey无效，请前往www.7yue.pro申请',
  3000:'期刊不存在'
}
 export default class Http {

  request (params){
    console.log(params)
    console.log(config)
    wx.request({
      url: config.base_url+params.url,
      data:params.date,
      header:{
        "content-type":"application/json",
      },
      success:(res)=>{
        if(res.statusCode==200){
          console.log(res.data)
          params.success(res.data)
          wx.showToast({
            title: res.data.value[0].title,
            icon:"none",
            duration:2000
          })
        }else{

          wx.showToast({
            title: "错误",
            icon:"none",
            duration:2000
          })
          // params.error && params.error(res)
        }
      },
      fail:(err)=>{
          this._show_error(1)
      }
      
    })

  }


  _show_error(error_code){
    if(!error_code){
        error_code = 1
    }
    const tip = tips[error_code]
    wx.showToast({
        title: tip?tip:tips[1], 
        icon:'none',
        duration:2000
    }) 
}
}
