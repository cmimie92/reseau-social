import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAmiComponent } from './ajout-ami.component';

describe('AjoutAmiComponent', () => {
  let component: AjoutAmiComponent;
  let fixture: ComponentFixture<AjoutAmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutAmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutAmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
