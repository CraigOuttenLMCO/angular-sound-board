import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReadyQueueComponent } from './edit-ready-queue.component';

describe('EditReadyQueueComponent', () => {
  let component: EditReadyQueueComponent;
  let fixture: ComponentFixture<EditReadyQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReadyQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReadyQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
