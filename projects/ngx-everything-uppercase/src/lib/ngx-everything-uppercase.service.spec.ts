import { TestBed } from '@angular/core/testing';

import { NgxEverythingUppercaseService } from './ngx-everything-uppercase.service';

describe('NgxEverythingUppercaseService', () => {
  let service: NgxEverythingUppercaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxEverythingUppercaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
