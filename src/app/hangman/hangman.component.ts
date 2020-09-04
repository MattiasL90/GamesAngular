import { Component, OnInit } from '@angular/core';
import {Hangman} from '../hangman/models/hangman';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})
export class HangmanComponent implements OnInit {

  public hangman: Hangman;

  words: string[] = [
     'Kalender', 'Kroppsdel', 'Trädkrona', 'Vispgrädde', 'Lasagne', 'Armhåla', 'Elefant', 'Gräshoppa'
  ];

  gameWord: string[] = [];
  playerWord: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.getNewWord();
  }

  get playerWordUi() {
    return this.playerWord;
  }

  getNewWord() {
    let count = Math.floor(Math.random() * (this.words.length));
    this.hangman.gameWord = this.words[count];
    // let word = this.words[count];
    // for (let i = 0; i < this.hangman.gameWord.length; i++){

    //   this.gameWord[i] = word.charAt(i);
    // }
    // this.playerWord = Array(word.length).fill(null);
  }

  makeGuess(event: any) {
    for (let i = 0; i < this.hangman.gameWord.length; i++)
    {
      if (event.key === this.gameWord[i].toLowerCase) {
        this.playerWord[i] = event.key;
        this.playerWord = [...this.playerWord];
      }
    }
  }
}
