import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeamisComponent } from './listeamis.component';

describe('ListeamisComponent', () => {
  let component: ListeamisComponent;
  let fixture: ComponentFixture<ListeamisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeamisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeamisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
