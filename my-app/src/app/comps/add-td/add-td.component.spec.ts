import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTdComponent } from './add-td.component';

describe('AddTdComponent', () => {
  let component: AddTdComponent;
  let fixture: ComponentFixture<AddTdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
