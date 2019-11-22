import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactPage from "./video/ReactPage";
import Vue from "./video/Vue";
import Flutter from "./video/Flutter";
import "../index.css";

function Video() {
  return (
    <Router>
      <div>
        <div className="topNav">
          <ul>
            <li>
              <Link to="/video/reactPage">React教程</Link>
            </li>
            <li>
              <Link to="/video/vue">Vue教程</Link>
            </li>
            <li>
              <Link to="/video/flutter">Flutter教程</Link>
            </li>
          </ul>
        </div>
        <div className="viedoContent">
          <h3>视频教程</h3>
          <Route path="/video/reactPage" component={ReactPage} />
          <Route path="/video/vue" component={Vue} />
          <Route path="/video/flutter" component={Flutter} />
        </div>
      </div>
    </Router>
  );
}

export default Video;
