import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor';

@Pipe({
  name: 'searchVendor'
})
export class SearchVendorPipe implements PipeTransform {

  transform(vendors: Vendor[], searchCriteria): Vendor[] {
    if(vendors==null || searchCriteria==null || searchCriteria=='')return vendors;
  
    let selectedVendors: Vendor[] = [];
    searchCriteria=searchCriteria.toLowerCase();
    for (let vendor of vendors){
      if (
        vendor.code.toLowerCase().includes(searchCriteria)
        ||vendor.name.toLowerCase().includes(searchCriteria)
        ||vendor.address.toLowerCase().includes(searchCriteria)
        ||vendor.city.toLowerCase().includes(searchCriteria)
        ||vendor.state.toLowerCase().includes(searchCriteria)
        ||vendor.zip.toLowerCase().includes(searchCriteria)
        ||vendor.phoneNumber.toLowerCase().includes(searchCriteria)
        ||vendor.email.toLowerCase().includes(searchCriteria)



        ) {
        selectedVendors.push(vendor);
      }
    }
    return selectedVendors;
  }

}
