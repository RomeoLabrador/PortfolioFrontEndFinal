import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesTokenComponent } from './habilidades-token.component';

describe('HabilidadesTokenComponent', () => {
  let component: HabilidadesTokenComponent;
  let fixture: ComponentFixture<HabilidadesTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesTokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadesTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
