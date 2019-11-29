import React from "react";
import Link from "next/link";
import Router from "next/router";

// const Home = () => {
//   function gotoA() {
//     Router.push("/jscA");
//   }
//   return (
//     <>
//       <div>我是首页</div>
//       <div>
//         <Link href="/jscA">
//           <a>去A页面</a>
//         </Link>
//       </div>
//       <div>
//         <Link href="/jscB">
//           <a>去B页面</a>
//         </Link>
//       </div>
//       <div>
//         <button onClick={gotoA}>去A页面</button>
//       </div>
//     </>
//   )
// };

const Home = () => {
  //routeChangeStart
  //routeChangeComplete
  //beforeHistoryChange
  //routeChangeError
  //hashChangeStart
  //hashChangeComplete

  Router.events.on('routeChangeStart', (...args)=>{
     console.log("1.routeChangeStart->路由开始变化,参数为:", ...args);
  })

  Router.events.on("routeChangeComplete", (...args) => {
    console.log("2.routeChangeComplete->路由结束变化,参数为:", ...args);
  });

  Router.events.on("beforeHistoryChange", (...args) => {
    console.log("3.beforeHistoryChange->在改变浏览器 history之前触发,参数为:", ...args);
  });

  Router.events.on("routeChangeError", (...args) => {
    console.log("4.routeChangeError->跳转发生错误,参数为:", ...args);
  });

  Router.events.on("hashChangeStart", (...args) => {
    console.log("5.hashChangeStart->hash跳转开始时执行,参数为:", ...args);
  });

  Router.events.on("hashChangeComplete", (...args) => {
    console.log("6.hashChangeComplete->hash跳转完成时,参数为:", ...args);
  });

  // 编程式跳转传递参数
  function gotoXiaojiejie() {
    // Router.push("/xiaojiejei?name=苍井空");
    Router.push({
      pathname: "/xiaojiejie",
      query: {
        name: "苍井空"
      }
    });
  }
  return (
    <>
      <div>我是首页</div>
      <div>
        <Link href="/xiaojiejie?name=结衣">选择结衣</Link>
        <br/><Link href={{pathname: '/xiaojiejie', query:{name:'苍井空'}}}>选择苍井空</Link>
      </div>
      <div>
        <button onClick={gotoXiaojiejie}>选择苍井空</button>
      </div>
      <div>
        <Link href="#jsc">选JSC</Link>
      </div>
    </>
  );
}
export default Home;
