import React, { useState } from 'react';

function Example2() {
  // React是根据useState出现的顺序来确定的,useState不能在if...else...
  const [age, setAge] = useState(18)
  const [sex, setSex] = useState('男')
  const [work, setWork] = useState('前端程序员')
  return (
    <div>
      <p>JSC今年： {age}岁</p>
      <p>性别： {sex} </p>
      <p>工作： {work} </p>
    </div>
  )
}

export default Example2;