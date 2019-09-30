import React from 'react'
import './App.css'

class Keyboard extends React.Component {
  render() {
    return (
      <button className="calcBtn">
        {this.props.value}
      </button>
    )
  }
}

class App extends React.Component {

  renderKeyboard(i) {
    return <Keyboard value={i} />
  }

  render() {
    return (
      <div className="App">
        <div>
          <input className="calcInput" disabled={true} />
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
            {this.renderKeyboard("x")}
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
            {this.renderKeyboard(",")}
            {this.renderKeyboard("=")}
          </div>
        </div>
      </div>
    )
  }
}

export default App
