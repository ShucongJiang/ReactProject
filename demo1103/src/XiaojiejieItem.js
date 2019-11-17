import React, { Component } from 'react';
import propTypes from 'prop-types';

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    this.handleClike = this.handleClike.bind(this)
    this.state = {}
  }
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  //组件第一次存在于dom中，函数不会被执行，
  //如果存在于dom中，函数才会被执行
  componentWillReceiveProps(nextProps) {
    console.log('child-componentWillReceiveProps');
  }
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.content !== this.props.content) {
      return true
    } else {
      console.log(nextProps.content);
      console.log(this.props.content);

      return false;
    }
  }

  componentWillUnmount() {
    console.log('child-componentWillUnmount');
  }
  render() {
    console.log('child-render');
    return (
      <li onClick={this.handleClike}>
        {this.props.avname}-{this.props.content}
      </li>
    );
  }
  handleClike() {
    // this.props.list = []; 单项数据流，不允许修改
    this.props.deleteItem(this.props.index)
  }
}

XiaojiejieItem.propTypes = {
  avname: propTypes.string.isRequired,
  content: propTypes.string,
  index: propTypes.number,
  deleteItem: propTypes.func
}
XiaojiejieItem.defaultProps = {
  avname: '1'
}

export default XiaojiejieItem;