import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularStartComponent } from './angular-start.component';

describe('AngularStartComponent', () => {
  let component: AngularStartComponent;
  let fixture: ComponentFixture<AngularStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
