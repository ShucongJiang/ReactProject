import React, { useState,useEffect } from 'react';

// class Example3 extends Component {
//   constructor(props) {
//       super(props);
//       this.state = { count:0 }
//   }
  
  
//   componentDidMount(){
//       console.log(`ComponentDidMount=>You clicked ${this.state.count} times`)
//   }
//   componentDidUpdate(){
//       console.log(`componentDidUpdate=>You clicked ${this.state.count} times`)
//   }

//   render() { 
//       return (
//           <div>
//               <p>You clicked {this.state.count} times</p>
//               <button onClick={this.addCount.bind(this)}>Chlick me</button>
//           </div>
//       );
//   }
//   addCount(){
//       this.setState({count:this.state.count+1})
//   }
// }

// 用useEffect函数来代替生命周期函数
function Example3() {
  const [count, setCount] = useState(0)
  
  useEffect(()=> {
    console.log(`useEffect=>You clicked ${count} times`);
  })
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=> {setCount(count + 1)}}>Click me</button>
    </div>
  )
}

export default Example3