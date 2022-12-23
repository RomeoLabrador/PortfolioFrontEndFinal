import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerTokenEditComponent } from './cer-token-edit.component';

describe('CerTokenEditComponent', () => {
  let component: CerTokenEditComponent;
  let fixture: ComponentFixture<CerTokenEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerTokenEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CerTokenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
