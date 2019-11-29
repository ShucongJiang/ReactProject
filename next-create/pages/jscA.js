import Link from "next/link";

export default () => (
  <>
    <div>Jsc-A page</div>
    {/* 用<Link>不支持兄弟标签并列的情况。
     可以把这两个标签外边套一个父标签 */}
    <Link href="/">
      <a>
        <span>返回首页</span>
        <span>前端博客</span>
      </a>
    </Link>
  </>
);
