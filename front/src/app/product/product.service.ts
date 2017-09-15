import {Injectable} from '@angular/core';

import { Product } from './product';

@Injectable()
export class ProductService {

  getAll = (): Promise<Product[]> => {
    return Promise.resolve([
        new Product(1, 'Aspirateur', 'Dyon', 600),
        new Product(2, 'Vélo', 'VTT jaune top max', 300)
      ]);
  }
}
