import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarAudioComponent } from './snack-bar-audio.component';

describe('SnackBarAudioComponent', () => {
  let component: SnackBarAudioComponent;
  let fixture: ComponentFixture<SnackBarAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
