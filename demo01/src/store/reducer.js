import { CHANGE_INPUT, ADD_ITEN, DELETE_ITEN, GET_LIST  } from "./actionTypes"

const defaultState = {
  inputValue: 'write Something',
  list: [
    '早上7点起床',
    '晚上12点睡觉'
  ]
} //默认数据
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state)); //深度拷贝
    newState.inputValue = action.value;
    return newState; //Reducer里只能接收state，不能改变state。 Reducer必须是纯函数
  }

  if (action.type === ADD_ITEN) {
    let newState = JSON.parse(JSON.stringify(state)); //深度拷贝
    newState.list.push(newState.inputValue); //push新的内容到列表中去
    newState.inputValue = "";
    return newState;
  }

  if (action.type === DELETE_ITEN) {
    let newState = JSON.parse(JSON.stringify(state)); //深度拷贝
    newState.list.splice(action.index, 1); //删除数组中对应的值
    return newState;
  }

  if (action.type === GET_LIST)  {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data.data.list
    return newState
  }
  
  return state;
}