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


  playAgain = () => {
    this.setState({
        mistake:0,
        guessed:new Set([]),
        answer:randomWord()
    })
}


  guessedWord() {
    return this.state.answer
      .split("")
      .map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  handleChange = e => {
    let letter = e.target.value;
    this.setState(ele => ({
      guessed: ele.guessed.add(letter),
      mistake: ele.mistake + (ele.answer.includes(letter) ? 0 : 1)
    }));
  };

  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
      <button
        class="btn btn-lg btn-primary m-2"
        key={letter}
        value={letter}
        onClick={this.handleChange}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  render() {
    //variable is counting if the max wrong exceed the amount defined if it is game over
    const gameOver = this.state.mistake >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer
    let gameStat = this.generateButtons();

    if (isWinner){
        gameStat = "You are a Winner, and clearly know Harry Potter"
    }else if (gameOver){
        gameStat = "You Lose!!!"
    }
    return (
      <div className="Hangman container">
        <h1><strong>Harry Potter Hangman</strong></h1>
        <div className="float-right">
          Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}
        </div>
        <div className="text-center">
          <img src={this.props.images[this.state.mistake]} alt="" />
        </div>
        <div className="text-center">
          <p><strong>Guess the Harry Potter Character:</strong></p>
          <p>{!gameOver ? this.guessedWord() : this.state.answer}</p>
          <p>{gameStat}</p>
          <button className='btn btn-info' onClick={this.playAgain}>Play Again</button>
        </div>
      </div>
    );
  }
}
