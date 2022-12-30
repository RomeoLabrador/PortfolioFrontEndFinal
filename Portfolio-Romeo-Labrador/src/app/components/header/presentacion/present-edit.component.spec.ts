import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentEditComponent } from './present-edit.component';

describe('PresentEditComponent', () => {
  let component: PresentEditComponent;
  let fixture: ComponentFixture<PresentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
