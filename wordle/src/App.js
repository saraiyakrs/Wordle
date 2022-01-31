import Keyboard from './Keyboard'
import style from './App.css'
import Board from './Board'
import React, {useState} from 'react'
import Userinfo from './Userinfo'


function App() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const alphaArr = alphabet
    .split('')
    .map(l => ({
      letter: l,
      color: "lightgrey"
    }))
  const [letters, setLetters] = useState(alphaArr)
  const [newLetter, setNewLetter] = useState('')
  const [newGuess, setNewGuess] = useState('')
  const [username, setUsername] = useState('')
  const [bestScore, setbestScore] = useState(0)
  const [gamesBeaten, setgamesBeaten] = useState(0)
  const [gamesPlayed, setgamesPlayed] = useState(0)
//username, best score, games beaten, games played 
  return (
    <div className="App">
      <header>
        <h1>WOODLE</h1>
      </header>
      <Userinfo username={username} bestScore={bestScore} gamesBeaten={gamesBeaten} gamesPlayed={gamesPlayed}  />
      <Board letters={letters} setLetters={setLetters} newLetter={newLetter} newGuess = {newGuess} setNewGuess = {setNewGuess}/>
      <Keyboard letters={letters} setNewLetter={setNewLetter} setNewGuess = {setNewGuess} guess = {newGuess}/>
    </div>
  );
}

export default App;