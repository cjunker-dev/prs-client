import { Vendor } from "../vendor/vendor";

export class Product {
    id: number = 0;
    vendor: Vendor = new Vendor();
    partNumber: string = '';
    name: string = '';
    price: number = 0;
    unit: string = '';
    photoPath: string = '';
}
