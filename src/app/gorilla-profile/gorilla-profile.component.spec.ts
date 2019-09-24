import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GorillaProfileComponent } from './gorilla-profile.component';

describe('GorillaProfileComponent', () => {
  let component: GorillaProfileComponent;
  let fixture: ComponentFixture<GorillaProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GorillaProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GorillaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
