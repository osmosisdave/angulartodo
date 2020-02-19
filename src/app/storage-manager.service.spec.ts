import { TestBed } from '@angular/core/testing';

import { StorageManagerService } from './storage-manager.service';

describe('LocalStorageManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageManagerService = TestBed.get(StorageManagerService);
    expect(service).toBeTruthy();
  });
});
