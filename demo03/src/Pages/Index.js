import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { uid: 123, title: "jsc-1" },
        { uid: 456, title: "jsc-2" },
        { uid: 789, title: "jsc-3" }
      ]
    };
    this.props.history.push("/home/")
  }
  render() {
    return (
      <div>
        {/* <Redirect to="/home/"></Redirect> */}
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li key={index}>
                <Link to={"/list/" + item.uid}> {item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Index;
