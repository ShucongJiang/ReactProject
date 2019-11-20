import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
// const store = createStore(
//   reducer,
//   applyMiddleware(thunk),
//   //这样写是完全没有问题的，但是我们的Redux Dev Tools插件就不能使用了，如果想两个同时使用，需要使用增强函数。使用增加函数前需要先引入compose。

//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );  //创建数据存储仓库

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer)
export default store