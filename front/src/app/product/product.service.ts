import { Injectable } from '@angular/core';
import { Product } from '../product/product';

@Injectable()
export class ProductService {
  getAll = (): Promise<Product[]> => {
    return Promise.resolve([
      new Product(1, 'Lit', 'Bultex', 800),
      new Product(1, 'Chaise', 'Bois', 49)
    ]);
  }
}
