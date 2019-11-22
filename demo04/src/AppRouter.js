import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./Pages/Index";
import Viedo from "./Pages/Viedo";
import WorkPlace from "./Pages/WorkPlace";
import './index.css'

let routeConfig = [
  { path: "/", title: "博客首页", exact: true, component: Index },
  { path: "/viedo", title: "视频教程", exact: false, component: Viedo },
  { path: "/workplace", title: "职业技能", exact: false, component: WorkPlace }
];

// function AppRouter() {
//   return (
//     <Router>
//       <div className="mainDiv">
//         <div className="leftNav">
//           <h3>一级导航</h3>
//           <ul>
//             <li><Link to="/">博客首页</Link></li>
//             <li><Link to="/viedo">视频教程</Link></li>
//             <li><Link to="/workplace">职业技能</Link></li>
//           </ul>
//         </div>
//         <div className="rightMain">
//           <Route path="/" exact component={Index}/>
//           <Route path="/viedo" component={Viedo}/>
//           <Route path="/workplace" component={WorkPlace}/>
//         </div>
//       </div>
//     </Router> 
//   );
// }
function AppRouter() {
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            {
              routeConfig.map((item,index) => {
                return (
                  <li key={index}><Link to={item.path}>{item.title}</Link></li>
                )
              })
            }
          </ul>
        </div>
        <div className="rightMain">
          {
            routeConfig.map((item,index)=> {
              return (
                <Route key={index} exact={item.exact} path={item.path} component={item.component}/>
              )
            })
          }
        </div>
      </div>
    </Router> 
  );
}
 
export default AppRouter;