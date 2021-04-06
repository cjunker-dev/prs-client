import { Product } from "src/app/product/product";
import {Request} from '../request';

export class LineItem {
    id: number = 0;
    request: Request;
    product: Product;
    quantity: number = 0;
}
