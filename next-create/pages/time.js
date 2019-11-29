import React, { useState } from 'react';
import dynamic from "next/dynamic";
// import moment from "moment";
const One = dynamic(import('../components/one'))

function Time() {
  const [time, setTime] = useState(Date.now())

  //懒加载模式
  const changeTime = async ()=>{ //把方法变成异步模式
    const moment = await import('moment') //等待moment加载完成
    setTime(moment.default(Date.now()).format()) //注意使用defalut
  }
  return (
    <>
      <div>显示时间：{time}</div>
      <One />
      <div>
        <button onClick={changeTime}>改变时间格式</button>
      </div>
    </>
  )
}
 
export default Time;