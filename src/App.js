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
import EnterKey from './components/EnterKey/EnterKey'
import MouseOver from './components/MouseOver/MouseOver'
import PopupDisplay from './components/PopupDisplay/PopupDisplay'
import ShowMessage from './components/ShowMessage/ShowMessage'
import PageScroll from './components/PageScroll/PageScroll'

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
        3. Create a text input component that logs the entered value to the
        console when the Enter key is pressed.
      </mark>
      <div>
        <EnterKey />
      </div>
      <mark>
        4.Create a component that changes its background color when the mouse
        enters and leaves its area.
        <MouseOver />
      </mark>
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
        7.Create a component that shows a popup message when a button is
        clicked.
        <PopupDisplay />
      </mark>
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
        14.Create a component that shows a message when a key is pressed.{' '}
        <ShowMessage />
      </mark>
      <mark>
        16.Create a component that shows a message when the page is scrolled.
        <PageScroll />
      </mark>
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
