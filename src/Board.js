import React from "react";
import ReactDOM from "react-dom";
import Square from './square';
import './index.css';
import {hot} from "react-hot-loader";

class Board extends React.Component {
  constructor(props) {
    super(props);
    // an array of 9 elements. fill each element with a value of null;
    this.state = {
      squares: Array(9).fill(null)
    }
  }
  renderSquare(i) {
    return <Square 
      value={this.handleClick[i]}
      onClick={(i)=> this.handleClick(i)}  
    />;
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
};

export default hot(module)(Board);
