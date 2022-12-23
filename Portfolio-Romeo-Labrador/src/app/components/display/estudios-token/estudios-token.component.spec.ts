import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosTokenComponent } from './estudios-token.component';

describe('EstudiosTokenComponent', () => {
  let component: EstudiosTokenComponent;
  let fixture: ComponentFixture<EstudiosTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiosTokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiosTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
