import React, { Component } from 'react';
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";

// class TodoListUi extends Component {
//   render() { 
//     return (
//       <div>
//         <div>
//           <Input
//             style={{ width: "250px", marginRight: "10px" }}
//             onChange={this.props.changeInputValue}
//             value={this.props.inputValue}
//           />
//           <Button type="primary" onClick={this.props.clickBtn}>
//             增加
//           </Button>
//         </div>
//         <div style={{ margin: "10px", width: "300px" }}>
//           <List
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item, index) => (
//               <List.Item
//                 //正序删除是没有问题的，但是倒叙删除是有问题的。 主要是我们的index出现了重新声明的问题。
//                 // onClick={index => {
//                 onClick={() => {
//                   this.props.deleteItem(index);
//                 }}
//               >
//                 {item}
//               </List.Item>
//             )}
//           />
//         </div>
//       </div>
//     );
//   }
// }

//不需要引入Component， 无状态组件代码，可以提高性能
const TodoListUi = (props) => {
  return (
    <div>
      <div>
        <Input
          style={{ width: "250px", marginRight: "10px" }}
          onChange={props.changeInputValue}
          value={props.inputValue}
        />
        <Button type="primary" onClick={props.clickBtn}>
          增加
        </Button>
      </div>
      <div style={{ margin: "10px", width: "300px" }}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item
              //正序删除是没有问题的，但是倒叙删除是有问题的。 主要是我们的index出现了重新声明的问题。
              // onClick={index => {
              onClick={() => {
                props.deleteItem(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
 
export default TodoListUi;
