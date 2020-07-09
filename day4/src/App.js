import React, { Component } from "react"
import "./App.css"

const WinMessage = () => <div>You Win!</div>
const TooLow = () => <div>Guess Higher!</div>
const TooHigh = () => <div>Guess Lower!</div>
const Cheated = () => <div>...But you cheated :(</div>

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomValue: Math.floor(Math.random() * 100),
      guess: -1,
      win: false,
      highOrLow: 0,
      showNumber: false,
      numberShown: false
    }
  }

  updateGuess = event => {
    this.setState({ guess: event.target.value })
  }

  checkWin = event => {
    event.preventDefault()
    // TODO: check if guess equal to randomValue and update this.state.win
    if (this.state.guess == this.state.randomValue) {
      this.setState({win: true})
    }
  }

  checkHighOrLow = event => {
    event.preventDefault()
    if (this.state.guess < this.state.randomValue)  {
      this.setState({highOrLow: -1})
    }
    else if (this.state.guess > this.state.randomValue) {
      this.setState({highOrLow: 1})
    }
    else {
      this.setState({highOrLow: 0})
    }
  }

checkAll = event => {
  event.preventDefault()
  this.checkWin(event)
  this.checkHighOrLow(event)
  this.NumberEverShown(event)
}

toggleShowNumber = event => {
  event.preventDefault()
  if (this.state.showNumber == false) {
    this.setState({showNumber: true})
  }
  else if (this.state.showNumber == true) {
    this.setState({showNumber: false})
  }
  this.NumberEverShown(event)
}

NumberEverShown = event => {
  event.preventDefault()
  if ((this.state.showNumber == true) & (this.state.win == false)) {
    this.setState({numberShown: true})
  }
}

reset = event => {
  event.preventDefault()
  this.setState({randomValue: Math.floor(Math.random() * 100)})
  this.setState({guess: -1})
  this.setState({win: false})
  this.setState({highOrLow: 0})
  this.setState({showNumber: false})
  this.setState({numberShown: false})
}

  render() {
    return (
      <div className="App">
        <h1>
          Guess the Number
        </h1>
        <form>
          <input type="button" value="Reveal Number" onClick={this.toggleShowNumber} />
        </form>
        {(this.state.showNumber) && <div>Current value: {this.state.randomValue}</div>}
        <form>
          <label>
            Enter a guess:
            <input
              type="number"
              value={this.state.value}
              onChange={this.updateGuess}
            />
          </label>
          <input type="submit" value="Submit" onClick={this.checkAll} />
        </form>
        {this.state.win && <WinMessage />}
        {this.state.win && this.state.numberShown && <Cheated />}
        {(this.state.highOrLow == -1) && <TooLow />}
        {(this.state.highOrLow == 1) && <TooHigh />}
        <form>
          <input type="button" value="Reset" onClick={this.reset} />
        </form>
      </div>
    )
  }
}

export default App
