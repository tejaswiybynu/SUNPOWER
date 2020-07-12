import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrecheckComponent } from './add-precheck.component';

describe('AddPrecheckComponent', () => {
  let component: AddPrecheckComponent;
  let fixture: ComponentFixture<AddPrecheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrecheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrecheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
