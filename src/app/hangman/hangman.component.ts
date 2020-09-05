import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HangmanDrawingComponent } from '../hangman-drawing/hangman-drawing.component';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})
export class HangmanComponent implements OnInit {

  words: string[] = [
     'Kalender', 'Kroppsdel', 'Trädkrona', 'Vispgrädde', 'Lasagne', 'Armhåla', 'Elefant', 'Gräshoppa'
  ];

  gameWord: string[] = [];
  public playerWord: string[] = [];
  wrongLetters: string[] = [];
  lettersInWord: number;
  wrongGuesses = 0;
  winner: boolean;

  @ViewChild(HangmanDrawingComponent) drawing: HangmanDrawingComponent;

  constructor() { }


  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this.getNewWord();
    this.winner = false;
    this.gameWord = [...this.gameWord];
  }

  get playerWordUi(): string {
    return this.playerWord.join('');
  }

  get gameWordUi(): string {
    return this.gameWord.join('');
  }

  get wrongLettersUi(): string {
    return this.wrongLetters.join(' ');
  }

  get winnerUi(): string {
    if(this.winner === true){
      let winText = 'Du har vunnit!';
      return winText;
    }
  }

  getNewWord(): void {
    let count = Math.floor(Math.random() * (this.words.length));
    let word = this.words[count];
    let letterCount = 0;
    for (let i = 0; i < word.length; i++){
      this.gameWord[i] = word.charAt(i);
      letterCount++;
    }
    this.lettersInWord = letterCount;
    this.playerWord = Array(word.length).fill('_');
    this.wrongLetters = Array();
  }

  makeGuess(c): void {
    let success: boolean = false;
    let t = c.data;
    for (let i = 0; i < this.gameWord.length; i++)
    {
      if (t.toLowerCase() === this.gameWord[i].toLowerCase()) {
        this.playerWord[i] = c.data;
        this.playerWord = [...this.playerWord];
        success = true;
        this.checkWinner();
      }
      if (i === (this.gameWord.length - 1)){
        if (success === false) {
          this.wrongGuesses++;
          this.wrongLetters.push(t);
          this.wrongLetters = [...this.wrongLetters];
          this.checkDraw();
        }
        success = false;
      }
    }
  }

  checkWinner(): void {
    let gWord = this.gameWord.map(word => word.toUpperCase());
    let pWord = this.playerWord.map(word => word.toUpperCase());
    let count = 0;

    for (let i = 0; i < gWord.length; i++)
    {
      if (gWord[i] === pWord[i])
      {
        count++;
        if (count === gWord.length)
        {
          this.winner = true;
        }
      }
    }
  }

  checkDraw(): void {
    if (this.wrongGuesses === 1) {
      this.drawing.drawCircle();
    }
    if (this.wrongGuesses === 2) {
      this.drawing.drawBody();
    }
    if (this.wrongGuesses === 3) {
      this.drawing.drawLeftArm();
      this.drawing.drawRightArm();
    }
    if (this.wrongGuesses === 4) {
      this.drawing.drawLeftLeg();
      this.drawing.drawRightLeg();
    }
    if (this.wrongGuesses === 5) {
      this.drawing.drawTopPoleUp();
    }
    if (this.wrongGuesses === 6) {
      this.drawing.drawTopPoleStraight();
    }
    if (this.wrongGuesses === 7) {
      this.drawing.drawTopPoleDown();
    }
    if (this.wrongGuesses === 8) {
      this.drawing.drawTopPoleSupport();
    }
    if (this.wrongGuesses === 9) {
      this.drawing.drawPoleBaseStraight();
    }
    if (this.wrongGuesses === 10) {
      this.drawing.drawPoleBaseDownLeft();
      this.drawing.drawPoleBaseDownRight();
    }
  }
}
