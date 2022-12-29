import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerEditComponent } from './cer-edit.component';

describe('CerEditComponent', () => {
  let component: CerEditComponent;
  let fixture: ComponentFixture<CerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
