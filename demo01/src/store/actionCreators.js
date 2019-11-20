import { CHANGE_INPUT, ADD_ITEN, DELETE_ITEN, GET_LIST } from "./actionTypes";
import axios from "axios";

export const changeInputAction = value => ({
  type: CHANGE_INPUT,
  value
});

export const addItemAction = () => ({
  type: ADD_ITEN,
});

export const deleteItemAction = index => ({
  type: DELETE_ITEN,
  index
});

export const getListAction = (data) =>({
  type: GET_LIST,
  data
})

export const getTodoList = () => {
  //不懂点1，网上：dispatch参数，是redux-thunk提供的
  return (dispatch) => {
    axios.get('https://www.fastmock.site/mock/7b9b0676b30826c6f1cbe8e2e296f98d/react/getList').then((res) => {
      const data = res.data
      const action = getListAction(data)
      dispatch(action)
    })
  }
}