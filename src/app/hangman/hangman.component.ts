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

  gameWord: string;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.getNewWord();
  }

  getNewWord() {
    let count = Math.floor(Math.random() * (this.words.length + 1));
    this.gameWord = this.words[count];
  }

  makeLine() {
    return '_ ';
  }

}
