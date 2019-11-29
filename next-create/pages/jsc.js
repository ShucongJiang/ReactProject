//Next框架就自动作好了路由 http://localhost:3000/jsc 访问当前页面
import React, { useState } from "react";
function Jsc() {
  const [color, setColor] = useState("blue");
  const changeColor = () => {
    setColor(color === "blue" ? "red" : "blue");
  };
  return (
    <>
      <div className="jsc">jsc的世界</div>
      <div>
        <button onClick={changeColor}>改变世界</button>
      </div>
      <style jsx>
        {`
          .jsc {
            color: ${color};
          }
        `}
      </style>
    </>
  );
}

export default Jsc;
