import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadosTokenComponent } from './certificados-token.component';

describe('CertificadosTokenComponent', () => {
  let component: CertificadosTokenComponent;
  let fixture: ComponentFixture<CertificadosTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadosTokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificadosTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
