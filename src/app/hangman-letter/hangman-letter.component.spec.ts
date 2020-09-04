import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanLetterComponent } from './hangman-letter.component';

describe('HangmanLetterComponent', () => {
  let component: HangmanLetterComponent;
  let fixture: ComponentFixture<HangmanLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangmanLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
