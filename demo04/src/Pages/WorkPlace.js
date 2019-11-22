import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Getup from "./workPlace/Getup";
import Money from "./workPlace/Money";
import "../index.css";

function WorkPlace() {
  return (
    <Router>
      <div>
        <div className="topNav">
          <ul>
            <li>
              <Link to="/workPlace/money">程序员加薪秘籍</Link>
            </li>
            <li>
              <Link to="/workPlace/getup">程序员早起攻略</Link>
            </li>
          </ul>
        </div>
        <div className="videoContent">
          <h3>职场软技能</h3>
          <Route path="/workPlace/money" component={Money}></Route>
          <Route path="/workPlace/getup" component={Getup}></Route>
        </div>
      </div>
    </Router>
  );
}

export default WorkPlace;