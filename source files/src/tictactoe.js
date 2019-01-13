import React from 'react'
import ReactDOM from 'react-dom'

function Square(props) {
    let buttonCss;
    props.position === props.index ? buttonCss = "selectsquare" : buttonCss = "square";
    return (
      <button className={buttonCss} onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  
class Board extends React.Component {
renderSquare(i) {
    return (
    <Square
        index={i}
        position={this.props.position}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
    />
    );
}

render() {
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
constructor(props) {
    super(props);
    this.state = {
    position: 4,
    history: [
        {
        squares: Array(9).fill(null)
        }
    ],
    stepNumber: 0,
    xIsNext: true,
    lastKey: null
    };


    this.handleKeydown = this.handleKeydown.bind(this);
}

componentDidMount(){
    document.addEventListener("keydown", this.handleKeydown, false);
  }

componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeydown, false);
  }


handleKeydown(e) {
    let new_pos;
    const isNumber = isFinite(e.key)
    switch(e.key) {
      case 'ArrowUp':
        this.state.position - 3 > 0 ? new_pos = this.state.position - 3 : new_pos = 0;
        this.setState({position: new_pos});
        break;
      case 'ArrowDown':
        this.state.position + 3 < 9 ? new_pos = this.state.position + 3 : new_pos = 8;
        this.setState({position: new_pos});
        break;
      case 'ArrowRight':
        this.state.position + 1 < 9 ? new_pos = this.state.position + 1 : new_pos = 8;
        this.setState({position: new_pos});
        break;
      case 'ArrowLeft': 
        this.state.position -1 > 0 ? new_pos = this.state.position - 1 : new_pos = 0;
        this.setState({position: new_pos});
        break;
      case 'Enter':
        this.handleClick(this.state.position);
        break;
    }

    if (isFinite(e.key)) {
        e.key === '0' ? this.jumpTo(0) : this.setState({position: parseInt(e.key) - 1});
    }
    

    this.setState({lastKey: e.key});
}

handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
    return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
    history: history.concat([
        {
        squares: squares
        }
    ]),
    stepNumber: history.length,
    xIsNext: !this.state.xIsNext
    });
}

jumpTo(step) {
    this.setState({
    stepNumber: step,
    xIsNext: (step % 2) === 0
    });
}

render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
    const desc = move ?
        'Go to move #' + move :
        'Go to game start';
    return (
        <li key={move}>
        <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
    );
    });

    let status;
    if (winner) {
    status = "Winner: " + winner;
    } else {
    status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
    <div>
    <div className="game" onKeyDown={this.handleKeydown}>

        <div className="game-board">
        <Board
            position={this.state.position}
            squares={current.squares}
            onClick={i => this.handleClick(i)}
        />
        </div>
        
        
    </div>
    <div>
    
    <div>{status}</div>
    <div>Press 0 to restart</div>
    {/*<ol>{moves}</ol>*/}
    
    </div>
    </div>
    );
}
}

// ========================================

//ReactDOM.render(<Game />, document.getElementById("root"));
export default Game;

function calculateWinner(squares) {
const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    return squares[a];
    }
}
return null;
}
  