import { TestBed } from '@angular/core/testing';

import { CategoryOfProductService } from './category-of-product.service';

describe('CategoryOfProductService', () => {
  let service: CategoryOfProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryOfProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
