import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcFermeComponent } from './parc-ferme.component';

describe('ParcFermeComponent', () => {
  let component: ParcFermeComponent;
  let fixture: ComponentFixture<ParcFermeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcFermeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcFermeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
