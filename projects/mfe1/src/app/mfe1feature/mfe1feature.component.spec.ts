import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mfe1featureComponent } from './mfe1feature.component';

describe('Mfe1featureComponent', () => {
  let component: Mfe1featureComponent;
  let fixture: ComponentFixture<Mfe1featureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mfe1featureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mfe1featureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
