import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainPlayerComponent } from './chain-player.component';

describe('ChainPlayerComponent', () => {
  let component: ChainPlayerComponent;
  let fixture: ComponentFixture<ChainPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChainPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
