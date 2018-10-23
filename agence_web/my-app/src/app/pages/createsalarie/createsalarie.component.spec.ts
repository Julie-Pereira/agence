import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesalarieComponent } from './createsalarie.component';

describe('CreatesalarieComponent', () => {
  let component: CreatesalarieComponent;
  let fixture: ComponentFixture<CreatesalarieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesalarieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
