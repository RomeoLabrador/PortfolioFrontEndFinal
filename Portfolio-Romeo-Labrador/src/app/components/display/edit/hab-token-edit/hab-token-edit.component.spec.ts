import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabTokenEditComponent } from './hab-token-edit.component';

describe('HabTokenEditComponent', () => {
  let component: HabTokenEditComponent;
  let fixture: ComponentFixture<HabTokenEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabTokenEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabTokenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
