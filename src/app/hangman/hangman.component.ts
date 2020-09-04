import { Component, OnInit } from '@angular/core';

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
  wordword;

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
    let word = this.words[count];
    for (let i = 0; i < word.length; i++){
      this.gameWord[i] = word.charAt(i);
    }
    this.playerWord = Array(word.length).fill(null);
  }

  makeGuess(event: any) {
    for (let i = 0; i < this.gameWord.length; i++)
    {
      if (event.key === this.gameWord[i].toLowerCase) {
        this.playerWord[i] = event.key;
        this.playerWord = [...this.playerWord];
      }
    }
  }
}
