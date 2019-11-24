import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { userInfo } from 'os';

function Index() {
  useEffect(()=>{
    console.log('userEffect=>老弟，你来了！Index页面');
    return ()=>{
      console.log('老弟，你走了！index页面');
    }
  })
  return (
    <h2>JSC.com</h2>
    )
  }
  
  function List() {
    useEffect(()=>{
      console.log('userEffect=>老弟，你来了！List页面');
    })
  return (
    <h2>List-Page</h2>
  )
}
// 用useEffect函数来代替生命周期函数
function Example4() {
  const [count, setCount] = useState(0)
  //useEffect的第二个参数，它是一个数组，数组中可以写入很多状态对应的变量，
  // 意思是当状态值发生变化时，我们才进行解绑。但是当传空数组[]时，就是当组件将被销毁时才进行解绑，这也就实现了componentWillUnmount的生命周期函数。
  useEffect(() => {
    console.log(`useEffect=> You clicked  ${count} times`);
    return ()=> {
      console.log('================');
    }
  }, [count])
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=> {setCount(count + 1)}}>Click me</button>
      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list">列表</Link></li>
        </ul>
        <Route path="/" exact component={Index}></Route>
        <Route path="/list" component={List}></Route>
      </Router>
    </div>
  )
}

export default Example4