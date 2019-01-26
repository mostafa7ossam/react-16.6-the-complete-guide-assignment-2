import React, { Component } from 'react';
import './App.css';
import Validator from './Validator/Validator'
import Char from './Char/Char'

class App extends Component {
  state = {
    text: "sifa"
  }

  textChangedEvent = (event) =>{
    this.setState({text: event.target.value})
  }

  letterClickHandler = (index) =>{
    let textLetters = this.state.text.split('');
    textLetters.splice(index, 1);
    this.setState({text: textLetters.join('')});
  }
  render() {
    let letters = null;

    const splitLetters = this.state.text.split('');

    letters = (
      <div>
      {splitLetters.map((letter, index) =>{
        return(
          <Char
          c={letter}
          key={index}
          func={()=>this.letterClickHandler(index)}/>
        );
      })}
      </div>
    )


    return (
      <div className="App">
        <input type="text" onChange={this.textChangedEvent} value={this.state.text}/>
        <p>{this.state.text.length}</p>
        <Validator length = {this.state.text.length}/>
        {letters}
      </div>
    );
  }
}

export default App;
