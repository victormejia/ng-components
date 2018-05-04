import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgComponentsVmejiaComponent } from './ng-components-vmejia.component';

describe('NgComponentsVmejiaComponent', () => {
  let component: NgComponentsVmejiaComponent;
  let fixture: ComponentFixture<NgComponentsVmejiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgComponentsVmejiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgComponentsVmejiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
