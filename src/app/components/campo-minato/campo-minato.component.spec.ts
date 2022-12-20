import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoMinatoComponent } from './campo-minato.component';

describe('CampoMinatoComponent', () => {
  let component: CampoMinatoComponent;
  let fixture: ComponentFixture<CampoMinatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampoMinatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampoMinatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
