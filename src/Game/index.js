import React from 'react';
import Board from '../Board'
import Map from '../Map'
import Map1 from '../Map1'
import Map2 from '../Map2'
import Map3 from '../Map3'
import Map4 from '../Map4'
//import Square from '../Square'

class Game extends React.Component {
//initializing state
constructor(props) {
    super();
    this.state = {
        history: [{
            squares: Array(9).fill(null),
        }],
        xIsNext: true,
        stepNumber: 0,
    };
}
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
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
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
}
jumpTo(step) {
    this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
    });
}

//array.push vs array.concat
//array.push mutates the original array

render() {
  const history = this.state.history;
  // const current = history[history.length - 1] to history[this.state.stepNumber]
  // instead of always rendering the last move, we should render the currently selected move
  const current = history[this.state.stepNumber];
  const winner = calculateWinner(current.squares);
  //mapping the history of moves 
  //for each move in history, we create a <li> which contains a <button>

  const moves = history.map((step, move) => {
      const desc = move ?
      'Go to move #' + move :
      'Go to start';
      return(
          <li key={move}>
              <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
      )
  })
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
          onClick={(i) => this.handleClick(i)}
      />
    </div>
    <div className="game-info">
      <div>{status }</div>
      <ol>{moves}</ol>
    </div>
    <section className="map-section">
    <Map />
    <Map1 />
    <Map2/>
    <Map4 />
    </section>
    

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

export default Game