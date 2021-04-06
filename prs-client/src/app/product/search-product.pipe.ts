import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(products: Product[], searchCriteria): Product[] {
    if(products == null || searchCriteria == null || searchCriteria== '')return products;

    let selectedProducts: Product[] = [];
    searchCriteria = searchCriteria.toLowerCase();
    for (let product of products){
      if (
        product.vendor.name.toLowerCase().includes(searchCriteria)
        || product.partNumber.toLowerCase().includes(searchCriteria)
        || product.name.toLowerCase().includes(searchCriteria)
      )
      selectedProducts.push(product);

    }


    return selectedProducts;
  }

}
