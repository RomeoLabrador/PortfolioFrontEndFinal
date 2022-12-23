import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaPruebaComponent } from './persona-prueba.component';

describe('PersonaPruebaComponent', () => {
  let component: PersonaPruebaComponent;
  let fixture: ComponentFixture<PersonaPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaPruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
