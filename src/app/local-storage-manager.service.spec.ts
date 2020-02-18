import { TestBed } from '@angular/core/testing';

import { LocalStorageManagerService } from './local-storage-manager.service';

describe('LocalStorageManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalStorageManagerService = TestBed.get(LocalStorageManagerService);
    expect(service).toBeTruthy();
  });
});
