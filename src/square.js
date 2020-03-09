import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import {hot} from "react-hot-loader";


class Square extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      console.log(this.props);
      return (
        <button 
          className="square" 
          onClick={() => { this.props.onClick()}}
        >
          {this.props.value}
        </button>
      );
    }
  };

  export default hot(module)(Square);
