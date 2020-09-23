import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//     //initialize state with a constructor
//     // constructor(props) {
//     //     super(props);
//     //     //In JS classes, we need super when defining the constructor of a subclass
//     //     //In React, all component classes should start with a super(props) call
//     //     this.state = {
//     //         value: null,
//     //     };
//     // }

//     //DELETED constructor since Sqauare does not manage game state anymore
//     //Square is now a controlled component

//     render() {
//       return (
//           //show the value passed by renderSquare
//           //adding on click - onClick={function() {alert('click');}} or
//           //onClick={() => alert('click')}
//           //need to pass the function or it will alert every time React re-renders
//           //onClick={function() {alert('click');}} becomes onClick={() => this.setState({value: 'X'})}
//         <button 
//            className="square" 
//            onClick={() => this.props.onClick() }
//         >
//           {this.props.value}
//         </button>
//         //{this.props.value} is now {this.state.value}

//         //lifting state - replacing {this.state.value} with {this.props.value}
//         //replacing this.setState({value: 'X'}) with this.props.OnClick()
//       );
//     }
//   }


//Create function component for Square
//does not have its own state
  function Square(props) {
      return (
          <button className="square" onClick={props.onClick} >
              {props.value}
          </button>
      );
  }
  
  class Board extends React.Component {
      //initialize with constructor to add state 
    //   constructor(props) {
    //       super(props);
    //       this.state = {
    //           squares : Array(9).fill(null),
    //           xIsNext: true,
    //       }
    //   }

    //Deleted constructor because we are now adding state to the top level game component

    //   handleClick(i) {
    //       const squares = this.state.squares.slice();
    //       if (calculateWinner(squares) || squares[i]) {
    //           return;
    //       }
    //       squares[i] = this.state.xIsNext ? 'X' : 'O';
    //       this.setState({
    //           squares: squares,
    //           xIsNext: !this.state.xIsNext,
    //         });
    //   }

    //Moving this handleClick logic to game component since state is now there
    renderSquare(i) {
      return (
      <Square 
        value = {this.props.squares[i]} 
        onClick={() => this.props.onClick(i)}
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
        // const winner = calculateWinner(this.state.squares);
        // let status;
        // if (winner) {
        //     status = 'Winner' + winner;
        // }
        // else {
        //     status = 'Next player:' +(this.state.xIsNext ? 'X' : 'O');
        // }
        //^^ this is now handled in Game component

      //const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
  
      return (
        <div>
        
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
      //initializing state
      constructor(props) {
          super(props);
          this.state = {
              history: [{
                  squares: Array(9).fill(null),
              }],
              xIsNext: true,
          };
      }
        handleClick(i) {
          const history = this.state.history;
          const current = history[history.length -1];
          const squares = current.squares.slice();
          if (calculateWinner(squares) || squares[i]) {
              return;
          }
          squares[i] = this.state.xIsNext ? 'X' : 'O';
          this.setState({
            history: history.concat([{
                squares: squares
            }]),
              xIsNext: !this.state.xIsNext,
            });
      }

      //array.push vs array.concat
      //array.push mutates the original array
      
    render() {
        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = calculateWinner(current.squares);
        let status;
        if (winner) {
            status = 'Winner' + winner;
        } 
        else {
            status = 'Next player:' + (this.state.xIsNext ? 'X' : 'O');
        }
       

      return (
        <div className="game">
          <div className="game-board">
            <Board 
                squares = {current.squares}
                onClick={(i) => this.handleClick}
            />
          </div>
          <div className="game-info">
            <div>{status }</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  //for an array of 9 squares, this function checks for a winner returns 'X' or 'O' or null
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  