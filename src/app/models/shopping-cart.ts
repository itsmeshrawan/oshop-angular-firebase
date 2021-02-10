import { Product } from './product';
import { ShoppingCartItem } from './shopping-cart-item';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';

export class ShoppingCart {
    items: ShoppingCartItem[] = [];

    constructor(private itemsMap: { [productId: string]: ShoppingCartItem }) {
        this.itemsMap = itemsMap || {};

        for (const productId in itemsMap) {
            const item = itemsMap[productId];
            this.items.push(new ShoppingCartItem({ ...item, $key: productId }));
            // (...item) called spred opration means send item object to the shopping cart items constructor
        }
    }

    getQuantity(product: Product) {
        const item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
    }

    get totalPrice() {
        let sum = 0;
        for (const productId of this.items) {
            // sum += this.items[productId].totalPrice;
            sum += productId.totalPrice;
        }
        return sum;
    }

    get totalItemsCount() {
        let count = 0;
        for (const productId in this.itemsMap)
            count += this.itemsMap[productId].quantity;
        return count;
    }
}
