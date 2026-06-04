import { TestBed } from '@angular/core/testing';

import { PhotoModalService } from './photo-modal.service';

describe('PhotoModalService', () => {
  let service: PhotoModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
