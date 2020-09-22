import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    //initialize state with a constructor
    constructor(props) {
        super(props);
        //In JS classes, we need super when defining the constructor of a subclass
        //In React, all component classes should start with a super(props) call
        this.state = {
            value: null,
        };
    }
    render() {
      return (
          //show the value passed by renderSquare
          //adding on click - onClick={function() {alert('click');}} or
          //onClick={() => alert('click')}
          //need to pass the function or it will alert every time React re-renders
        <button className="square" onClick={function() {alert('click');}}>
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
      //passing a prop called value to square
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
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  