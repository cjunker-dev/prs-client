import { Product } from "src/app/product/product";

export class RequestLines {
    id: number = 0;
    request: Request;
    product: Product;
    quantity: number = 0;
}
