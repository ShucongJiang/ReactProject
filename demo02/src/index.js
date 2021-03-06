import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store';

//声明一个App组件，然后这个组件用Provider进行包裹
//<Provider>是一个提供器，只要使用了这个组件，组件里边的其它所有组件都可以使用store了
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));

