import HTTP from "../utils/http"

export default class ClassicModel  extends HTTP {

  
   getLatest(sCallback) {

    let params={
      url:"music/searchMusicList/",
      data:{
          type:"audio"
      },
      success: function (res) {
        sCallback(res)
      },
      error: function (res) {
        console.log(res)
      },
    }
    this.request(params)
}



}

