import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Foo4Component } from './foo4.component';

describe('Foo4Component', () => {
  let component: Foo4Component;
  let fixture: ComponentFixture<Foo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Foo4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Foo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
