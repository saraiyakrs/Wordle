import logo from './logo.svg';
import Keyboard from './Keyboard'
import Board from './Board'


function App() {
<<<<<<< Updated upstream
=======

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const alphaArr = alphabet
    .split('')
    .map(l => ({
      letter: l,
      color:"lightgrey"
    }))
  const [letters, setLetters] = useState(alphaArr)
  const [newLetter, setNewLetter] = useState('') 
>>>>>>> Stashed changes
  return (
    <div className="App">
      <header>
       <h1>Wordle</h1>
      </header>
<<<<<<< Updated upstream
      <Board/>
      <Keyboard/>
=======
      <Board letters = {letters} setLetters={setLetters} newLetter = {newLetter}/>
      <Keyboard letters = {letters} setNewLetter ={setNewLetter}/>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
