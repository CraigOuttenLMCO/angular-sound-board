import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedPlayerComponent } from './tabbed-player.component';

describe('TabbedPlayerComponent', () => {
  let component: TabbedPlayerComponent;
  let fixture: ComponentFixture<TabbedPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbedPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
