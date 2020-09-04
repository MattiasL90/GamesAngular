import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGamesNavComponent } from './top-games-nav.component';

describe('TopGamesNavComponent', () => {
  let component: TopGamesNavComponent;
  let fixture: ComponentFixture<TopGamesNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopGamesNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopGamesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
