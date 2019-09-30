import React from 'react'
import './App.css'
import { isNumber } from 'util'

class Keyboard extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick} className="calcBtn">
        {this.props.value}
      </button>
    )
  }
}

class App extends React.Component {
  state = {
    result: 0,
    userInput: ''
  }

  renderKeyboard(i) {
    return <Keyboard value={i} onClick={this.handleClick.bind(this, i)} />
  }

  handleClick = i => {
    switch (i) {
      case "AC":
        this.setState({ userInput: '' })
        break;
      case "←":
        if (!isNumber(this.state.userInput)) {
          this.setState({ userInput: this.state.userInput.substring(0, this.state.userInput.length - 1) })
        }
        break
      case "=":
        this.setState({ userInput: eval(this.state.userInput) })
        console.log(this.state.userInput)
        break
      case "+/-":
        this.setState({ userInput: eval(this.state.userInput + " * (-1)") })
        break
      default:
        this.setState({
          userInput: this.state.userInput + i
        })
        break
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <input className="calcInput" value={this.state.userInput} disabled={true} />
        </div>
        <div>
          <div>
            {this.renderKeyboard("AC")}
            {this.renderKeyboard("←")}
            {this.renderKeyboard("%")}
            {this.renderKeyboard("+")}
          </div>
          <div>
            {this.renderKeyboard(7)}
            {this.renderKeyboard(8)}
            {this.renderKeyboard(9)}
            {this.renderKeyboard("-")}
          </div>
          <div>
            {this.renderKeyboard(4)}
            {this.renderKeyboard(5)}
            {this.renderKeyboard(6)}
            {this.renderKeyboard("*")}
          </div>
          <div>
            {this.renderKeyboard(3)}
            {this.renderKeyboard(2)}
            {this.renderKeyboard(1)}
            {this.renderKeyboard("/")}
          </div>
          <div>
            {this.renderKeyboard(0)}
            {this.renderKeyboard("+/-")}
            {this.renderKeyboard(".")}
            {this.renderKeyboard("=")}
          </div>
        </div>
      </div>
    )
  }
}

export default App
