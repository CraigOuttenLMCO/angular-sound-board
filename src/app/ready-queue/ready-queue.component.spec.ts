import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyQueueComponent } from './ready-queue.component';

describe('ReadyQueueComponent', () => {
  let component: ReadyQueueComponent;
  let fixture: ComponentFixture<ReadyQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
