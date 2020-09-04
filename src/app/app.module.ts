import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { TictactoesquareComponent } from './tictactoesquare/tictactoesquare.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { TopGamesNavComponent } from './top-games-nav/top-games-nav.component';
import { HangmanComponent } from './hangman/hangman.component';
import { HangmanLetterComponent } from './hangman-letter/hangman-letter.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'tictactoe', component: TicTacToeComponent },
  { path: 'hangman', component: HangmanComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeComponent,
    TictactoesquareComponent,
    TopGamesNavComponent,
    HangmanComponent,
    HangmanLetterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbInputModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
