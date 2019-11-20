import React, { Component } from 'react';
import 'antd/dist/antd.css'
// import { Input, Button, List } from 'antd';
import store from "./store";
// import { CHANGE_INPUT, ADD_ITEN, DELETE_ITEN} from "./store/actionTypes";
import {
  getTodoList,
  changeInputAction,
  addItemAction,
  deleteItemAction,
  getListAction
} from "./store/actionCreators";
import TodoListUi from "./TodoListUi";

// const data = [
//   '星期一',
//   '星期二',
//   '星期三'
// ]

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this)
    this.clickBtn = this.clickBtn.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }
  componentDidMount() {
    // axios.get('https://www.fastmock.site/mock/7b9b0676b30826c6f1cbe8e2e296f98d/react/getList').then((res) => {
    //   console.log(res);
    //   const data = res.data
    //   const action = getListAction(data);
    //   store.dispatch(action)
    // })
    const action = getTodoList()
    store.dispatch(action)
  }
  render() { 
    return (
      <TodoListUi
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        deleteItem={this.deleteItem}
      />
    );
  }
  changeInputValue(e) {
    console.log(e.target.value);
    // const action = {
    //   type: CHANGE_INPUT,
    //   value: e.target.value
    // };
    const action = changeInputAction(e.target.value);
    store.dispatch(action)
  }
  clickBtn(){
    // const action = {
    //   type: ADD_ITEN
    // };
    const action = addItemAction();
    store.dispatch(action)
  }
  deleteItem(index){
    // const action = {
    //   type: DELETE_ITEN,
    //   index
    // }; 
    const action = deleteItemAction(index);
    store.dispatch(action)
  }
  storeChange() {
    this.setState(store.getState())
  }
}
 
export default TodoList;
