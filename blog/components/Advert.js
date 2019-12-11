import "../static/style/components/advert.css";

const Advert = ()=>{
    return (
      // 注：不知道为什么是要ad-div样式，就会出现display：none
      <div className="advert-div comm-box">
        <div><img src="http://blogimages.jspang.com/WechatIMG12.jpeg" width="100%" /></div>
        <div><img src="http://blogimages.jspang.com/WechatIMG12.jpeg" width="100%" /></div>
        <div><img src="http://blogimages.jspang.com/WechatIMG12.jpeg" width="100%" /></div>
      </div>
    )
 }

 export default Advert