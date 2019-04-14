import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDndComponent } from './test-dnd.component';

describe('TestDndComponent', () => {
  let component: TestDndComponent;
  let fixture: ComponentFixture<TestDndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
