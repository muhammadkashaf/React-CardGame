import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Counter from './Components/Counter/Counter'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      num1: 1,
      num2: 1,
      score: 0,
      response: "",
      incorrect: false
    }
  }

  render() {
    if (this.state.score >= 5) {
      return this.renderWin();
    } else {
      return this.renderProblem();
    }
  }


  renderProblem() {
    return (
      <div className="App">
        <h1 className={this.state.incorrect ? "incorrect" : ""}>{this.state.num1} + {this.state.num2}</h1>
        <input onKeyPress={this.inputKeyPress} onChange={this.updateResponse} value={this.state.response} />
        <div>
          Score: {this.state.score}
        </div>
        <button onClick={this.resetGame}>Reset</button>
      </div>
    );
  }

  renderWin() {
    return (
      <div className="App">
        <h1>Congragulation you win</h1>
      </div>
    )
  }


  updateResponse = (e) => {
    this.setState({
      response: e.target.value
    });
  }




  inputKeyPress = (e) => {
    if (e.key === "Enter") {
      const answar = parseInt(this.state.response)
      if (answar === this.state.num1 + this.state.num2) {
        //Answar is right
        this.setState(state => ({
          score: state.score + 1,
          num1: Math.ceil(Math.random() * 10),
          num2: Math.ceil(Math.random() * 10),
          response: "",
          incorrect: false
        }));

      } else {
        //Answar is wrong
        this.setState({
          response: "",
          incorrect: true
        });

      }
    }

    
  }


}


export default App;
