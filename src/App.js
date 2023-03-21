import './assets/styles/App.css'
import ChangeColor from './components/ChangeColor/ChangeColor'
import Checkbox from './components/Checkbox/Checkbox'
import CountdownTimer from './components/CountdownTimer/CountdownTimer'
import MessageHover from './components/MessageHover/MessageHover'
import MessageLog from './components/MessageLog/MessageLog'

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
    </article>
  )
}

export default App
