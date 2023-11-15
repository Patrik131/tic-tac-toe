import { useState } from 'react'
import './App.css'
import Square from './Square.jsx'

function checkWinner(squares) {
  const possibleSolutions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 7],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for(let i = 0; i<possibleSolutions.length; i++) {
    let [a, b, c] = possibleSolutions[i]
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isXnext, setIsXNext] = useState(false)

  function click(i) {
    let nextSquare = [...squares]
    if(nextSquare[i] || checkWinner(squares)) {
      return
    }

    if(isXnext) {
      nextSquare[i] = "X"
    } else {
      nextSquare[i] = "O"
    }
    setSquares(nextSquare)
    setIsXNext(prev => !prev)
  }

  let winner = checkWinner(squares)
  let message
  if(winner) {
    message = `The winner is ${winner}`
  } else {
    message = `${isXnext ? "X" : "O"} has the next move`
  }

  return (
    <>
      <div className="row">
        <Square value={squares[0]} handleClick={()=>click(0)}/>
        <Square value={squares[1]} handleClick={()=>click(1)}/>
        <Square value={squares[2]} handleClick={()=>click(2)}/>
      </div>
      <div className="row">
        <Square value={squares[3]} handleClick={()=>click(3)}/>
        <Square value={squares[4]} handleClick={()=>click(4)}/>
        <Square value={squares[5]} handleClick={()=>click(5)}/>
      </div>
      <div className="row">
        <Square value={squares[6]} handleClick={()=>click(6)}/>
        <Square value={squares[7]} handleClick={()=>click(7)}/>
        <Square value={squares[8]} handleClick={()=>click(8)}/>
      </div>
      <div>{message}</div>
    </>
  )
}

export default App
