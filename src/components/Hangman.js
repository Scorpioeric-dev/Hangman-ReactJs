import React, { Component } from "react";
import "./Hangman.css";
import { randomWord } from "./Words.js";
import step0 from "./images/images/0.jpg";
import step1 from "./images/images/1.jpg";
import step2 from "./images/images/2.jpg";
import step3 from "./images/images/3.jpg";
import step4 from "./images/images/4.jpg";
import step5 from "./images/images/5.jpg";
import step6 from "./images/images/6.jpg";

export default class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [step0, step1, step2, step3, step4, step5, step6]
  };
  state = {
    mistake: 0,
    guessed: new Set([]),
    answer: randomWord()
  };

  guessedWord() {
    return this.state.answer
      .split("")
      .map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  render() {
    //variable is counting if the max wrong exceed the amount defined if it is game over
    const gameOver = this.state.mistake >= this.props.maxWrong;
    return (
      <div className="Hangman container">
        <h1 className="text-center">Hangman</h1>
        <div className="float-right">
          Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}
        </div>
        <div className="text-center">
          <img src={this.props.images[this.state.mistake]} alt="" />
        </div>
        <div className="text-center">
          <p>Guess the Harry Potter Characters:</p>
          <p>{!gameOver ? this.guessWord() : this.state.answer}</p>
        </div>
      </div>
    );
  }
}
