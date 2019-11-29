import Head from "next/head";
import { Button } from "antd";
import "../static/text.css";

function Header() {
  return (
    <>
      <Head>
        <title>jsc是最胖的</title>
        <meta charSet='utf-8'/>
      </Head>
      <div>JSC.COM</div>
      <div>
        <Button>我是按钮</Button>
      </div>
    </>
  );
}

export default Header;
