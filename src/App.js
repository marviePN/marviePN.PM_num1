import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: "",
      word: '',
      countw: 0,
      numoccurrence: 0,
      array: []
    };
  }
  inputHandler = (event) => {
    const { sentence, word, array } = this.state;
    array.push(sentence);
    var sen = array[Math.floor(Math.random() * array.length)];
    var sSplit = sen.split(" ");
    this.setState({ countw: sSplit.length });
    var cntr = 0;
    for (let i = 0; i < sSplit.length; i++) {
      if (sSplit[i] === word) {
        cntr += 1;
      }
    }
    this.setState({ numoccurrence: cntr });
  }
  render() {
    const { sentence, word, countw, numoccurrence } = this.state;
    return (
      
        
      
      <div id="main">
        <h2>Word Count</h2>
        <h3>Sentence:</h3>
        <input placeholder="input sentence here..." onChange={event => this.setState({ sentence: event.target.value })}></input>&nbsp; &nbsp;
<h3>Words:</h3>
        <input placeholder="input words here..." onChange={event => this.setState({ word: event.target.value })}></input><br></br>
        <div>
          <button onClick={event => this.inputHandler(event)}>Count</button>
        </div>
        <div>
          <br /><br />
          The sentence:{sentence}
        </div>
        <div>
        </div>
        Number of words:{countw}
        <div>
          Number of word occurence:{word} : {numoccurrence}</div>
      </div>
    );
  }
}
export default App;