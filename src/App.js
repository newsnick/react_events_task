import './assets/styles/App.css'
import ChangeColor from './components/ChangeColor/ChangeColor'
import Checkbox from './components/Checkbox/Checkbox'
import CountdownTimer from './components/CountdownTimer/CountdownTimer'
import MessageHover from './components/MessageHover/MessageHover'
import MessageLog from './components/MessageLog/MessageLog'
import DateTime from './components/DateTime/DateTime'
import RandomNumber from './components/RandomNumber/RandomNumber'
import RandomColor from './components/RandomColor/RandomColor'
import RandomWord from './components/RandomWord/RandomWord'

function App() {
  return (
    <article className="App">
      <mark>
        1. Create a button component that logs a message to the console when
        clicked.
        <MessageLog />
      </mark>
      <mark>
        2.Create a checkbox component that logs a message to the console when
        checked or unchecked.
      </mark>
      <div>
        <Checkbox />
      </div>
      <mark>
        5.Create a component that displays a message when the mouse hovers over
        it.
      </mark>
      <MessageHover />
      <mark>
        6.Create a component that changes its text color when clicked.
      </mark>
      <ChangeColor />
      <mark>
        12.Create a component that displays a countdown timer when clicked.
        <CountdownTimer />
      </mark>
      <mark>
        13.Create a component that displays the current date and time when
        clicked.
      </mark>
      <DateTime />
      <mark>
        18.Create a component that displays a random number when clicked.
      </mark>
      <RandomNumber />
      <mark>
        19.Create a component that displays a random color when clicked.
      </mark>
      <RandomColor />
      <mark>
        20.Create a component that displays a random word when clicked.
      </mark>
      <RandomWord />
    </article>
  )
}

export default App
