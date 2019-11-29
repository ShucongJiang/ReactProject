import { withRouter } from "next/router";
import Link from 'next/link';
// import axios from 'axios'

const Xiaojiejie = ({router, list})=>{
  return (
    <>
      <div>{router.query.name}</div>
      <div>{list}</div>
      <Link href="/">
        <a>返回首页</a>
      </Link>
    </>
  );
}

Xiaojiejie.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios('https://easy-mock.com/mock/5dc03659bb66a32af96ae5d4/ReactDemo1103/xiaojiejie').then((res)=> {
      console.log('远程数据结果：', res);
      resolve(res.data.data)
    })
  }) 
  return promise
}

export default withRouter(Xiaojiejie);
