import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.getNewWord();
  }

  get playerWordUi() {
    return this.playerWord.join("");
  }

  get gameWordUi() {
    return this.gameWord.join("");
  }

  getNewWord() {
    let count = Math.floor(Math.random() * (this.words.length));
    let word = this.words[count];
    for (let i = 0; i < word.length; i++){
      this.gameWord[i] = word.charAt(i);
    }
    this.playerWord = Array(word.length).fill(null);
  }

  makeGuess(c) {
    for (let i = 0; i < this.gameWord.length; i++)
    {
      let t = c.data;
      if (t.toLowerCase() === this.gameWord[i].toLowerCase()) {
        this.playerWord[i] = c.data;
        this.playerWord = [...this.playerWord];
      }
    }
  }
}
