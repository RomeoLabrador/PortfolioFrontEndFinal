import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstTokenEditComponent } from './est-token-edit.component';

describe('EstTokenEditComponent', () => {
  let component: EstTokenEditComponent;
  let fixture: ComponentFixture<EstTokenEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstTokenEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstTokenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
