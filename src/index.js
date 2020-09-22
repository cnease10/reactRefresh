import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    //initialize state with a constructor
    // constructor(props) {
    //     super(props);
    //     //In JS classes, we need super when defining the constructor of a subclass
    //     //In React, all component classes should start with a super(props) call
    //     this.state = {
    //         value: null,
    //     };
    // }

    //DELETED constructor since Sqauare does not manage game state anymore
    //Square is now a controlled component

    render() {
      return (
          //show the value passed by renderSquare
          //adding on click - onClick={function() {alert('click');}} or
          //onClick={() => alert('click')}
          //need to pass the function or it will alert every time React re-renders
          //onClick={function() {alert('click');}} becomes onClick={() => this.setState({value: 'X'})}
        <button 
           className="square" 
           onClick={() => this.props.onClick() }
        >
          {this.props.value}
        </button>
        //{this.props.value} is now {this.state.value}

        //lifting state - replacing {this.state.value} with {this.props.value}
        //replacing this.setState({value: 'X'}) with this.props.OnClick()
      );
    }
  }
  
  class Board extends React.Component {
      //initialize with constructor to add state 
      constructor(props) {
          super(props);
          this.state = {
              squares : Array(9).fill(null),
          }
      }
      handleClick(i) {
          const squares = this.state.squares.slice();
          squares[i] = 'X';
          this.setState({squares: squares});
      }
    renderSquare(i) {
      return (
      <Square 
        value = {this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
      />
      );
      //passing a prop called value to square with Square value={i} 
      //replacing Square value={i} with value={this.state.squares[i]}
      //this.state.squares is reading from the array that we added to our state
      //each square now receives a value prop

      //lifting state -need to pass a function from board to square to have square call 
      //replaced  value={this.state.squares[i] with
      //value = {this.state.squares[i]} and onClick={() => this.handleClick(i)}

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
  