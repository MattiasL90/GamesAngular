import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TictactoesquareComponent } from './tictactoesquare.component';

describe('TictactoesquareComponent', () => {
  let component: TictactoesquareComponent;
  let fixture: ComponentFixture<TictactoesquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TictactoesquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TictactoesquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
