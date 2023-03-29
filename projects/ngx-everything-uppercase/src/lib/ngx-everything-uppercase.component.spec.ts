import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEverythingUppercaseComponent } from './ngx-everything-uppercase.component';

describe('NgxEverythingUppercaseComponent', () => {
  let component: NgxEverythingUppercaseComponent;
  let fixture: ComponentFixture<NgxEverythingUppercaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxEverythingUppercaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxEverythingUppercaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
