import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerStatusComponent } from './hacker-status.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <vm-hacker-status [status]="appStatus"></vm-hacker-status>
  `
})
class TestHostComponent {
  appStatus: string;
}

describe('HackerStatusComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHostComponent, HackerStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });

  it('should set pulse color to green when input is "safe"', () => {
    testHost.appStatus = 'safe';

    fixture.detectChanges();

    const pulseEl: HTMLElement = fixture.debugElement.query(By.css('.pulse')).nativeElement;

    expect(pulseEl.classList).toContain('green');
  });

  it('should set pulse color to green when input is "safe" (snapshot testing)', () => {
    testHost.appStatus = 'safe';

    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('should set pulse color to red when input is "danger" (snapshot testing)', () => {
    testHost.appStatus = 'danger';

    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('should set pulse color to yellow when input is "warning" (snapshot testing)', () => {
    testHost.appStatus = 'warning';

    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
