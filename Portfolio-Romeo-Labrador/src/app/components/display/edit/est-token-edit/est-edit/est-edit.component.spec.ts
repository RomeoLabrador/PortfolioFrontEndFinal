import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstEditComponent } from './est-edit.component';

describe('EstEditComponent', () => {
  let component: EstEditComponent;
  let fixture: ComponentFixture<EstEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
