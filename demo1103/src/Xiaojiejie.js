import React, { Component, Fragment } from 'react';
import axios from 'axios'
import './index.css'
import './XiaojiejieItem'
import XiaojiejieItem from './XiaojiejieItem';
import Boss from './Boss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'jsc',
      list: []
    }
  }
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    console.log('render ----- 组件将要挂载到页面中');
  }
  componentDidMount() {
    console.log('componentDidMount ----- 组件挂载完成时刻');
    axios.get('https://www.easy-mock.com/mock/5dc03659bb66a32af96ae5d4/ReactDemo1103/xiaojiejie').then((res) => {
      console.log('aixos 获取数据成功' + JSON.stringify(res))
      this.setState({
        list: res.data.data
      })
    }).catch((error) => {
      console.log('aixos 获取数据失败' + error)
    });
  }
  //优化性能
  shouldComponentUpdate() {
    console.log('1-shouldComponentUpdate');
    //需要return，不然会报错，得true才能，执行render函数
    return true;
  }
  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate(nextProps, nextState) {
    console.log('2-componentWillUpdate');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('4-componentDidUpdate');
  }
  render() {
    console.log('3-render ----- 组件挂载中');

    return (
      //reuturn需要总的一个标签包裹，但是又不想要用多余标签，使用Frament
      <Fragment>
        {/*这是注释， 如果使用//得单独一行*/}
        <div>
          {/* 使用for会报错 */}
          <label htmlFor="jsc">增加服务: </label>
          <input
            id="jsc"
            className="input"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref={(input) => { this.input = input }} />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul ref={(ul) => { this.ul = ul }}>
          <TransitionGroup>
            {
              this.state.list.map((item, index) => {
                //没绑定key会报错
                return (
                  <CSSTransition
                    timeout={2000}
                    classNames='boss-text'
                    unmountOnExit
                    appear={true}
                    key={index+item}
                  >
                    <XiaojiejieItem
                      key={index + item}
                      content={item}
                      index={index}
                      list={this.state.list}
                      deleteItem={this.deleteItem.bind(this)}
                    />
                  </CSSTransition>
                )
              })
            }
          </TransitionGroup>
        </ul>
        <Boss />
      </Fragment>
    )
  }
  inputChange(e) {
    //调用不加bind，this会为undefined
    //和vue区别是不能直接赋值 this.state.inputValue = e.target.value
    this.setState({
      // inputValue: e.target.value
      inputValue: this.input.value
    })
  }
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    }, () => {
      console.log(this.ul.querySelectorAll('li').length); //setState是异步改变
    })

  }
  deleteItem(index) {
    console.log(index);
    //错误案例, 不报错，但是对性能有影响
    // this.state.list.splice(index,1)
    // this.setState({
    //   list: this.state.list
    // })

    let list = this.state.list
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }
}

export default Xiaojiejie;