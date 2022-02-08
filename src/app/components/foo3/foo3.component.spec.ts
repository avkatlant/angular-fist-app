import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Foo3Component } from './foo3.component';

describe('Foo3Component', () => {
  let component: Foo3Component;
  let fixture: ComponentFixture<Foo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Foo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Foo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
