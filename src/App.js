import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import StoryForm from './components/StoryForm.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
        selectedMadLib: MadLibs[Math.floor(Math.random() * MadLibs.length-1)],
        displayStory: false
    };

    this.updateWord = this.updateWord.bind(this)
  }

  updateWord(key, value) {
    const updatedMadLib = this.state.selectedMadLib;
    const changedWord = updatedMadLib.words.find((word) => {
      return word.key === key
    });
    changedWord.value = value;
    this.setState({selectedMadLib: updatedMadLib});
  }


  render() {

    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
          <p>Fill in all of the choices to see your final story.</p>
        <StoryForm
          updateWord={this.updateWord}
          words = {this.state.selectedMadLib.words}
          />

        <Story
          title={ this.state.selectedMadLib.title }
          text={ this.state.selectedMadLib.getText() }
      />

      </section>
    );
  }
}

export default App;
