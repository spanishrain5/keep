import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountNotes } from './count-notes';

describe('CountNotes', () => {
  let component: CountNotes;
  let fixture: ComponentFixture<CountNotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountNotes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountNotes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
