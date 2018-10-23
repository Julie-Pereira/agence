import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesalarieComponent } from './updatesalarie.component';

describe('UpdatesalarieComponent', () => {
  let component: UpdatesalarieComponent;
  let fixture: ComponentFixture<UpdatesalarieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesalarieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
