import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./Pages/Index";
import List from "./Pages/List";
import Home from "./Pages/Home";

// function Index() {
//   return (
//     <h2>JSC</h2>
//   )
// }

// function List() {
//   return (
//     <h2>List</h2>
//   )
// }


function AppRouter() {
  return (
    <Router>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/list/123">列表</Link></li>
      </ul>
      {/* exact精准匹配的意思 */}
      <Route path="/" exact component={Index}></Route>
      <Route path="/Home" component={Home}></Route>
      <Route path="/list/:id" component={List}></Route>
    </Router>
  );
}

export default AppRouter;
