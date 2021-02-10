import { TestBed, inject } from '@angular/core/testing';

import { ShoppingCartSummaryService } from './shopping-cart-summary.service';

describe('ShoppingCartSummaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingCartSummaryService]
    });
  });

  it('should be created', inject([ShoppingCartSummaryService], (service: ShoppingCartSummaryService) => {
    expect(service).toBeTruthy();
  }));
});
