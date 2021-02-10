import { Product } from './Product';
import { ShoppingCartItem } from './shopping-cart-item';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';

export class ShoppingCart {
    items: ShoppingCartItem[] = [];

    constructor(public itemsMap: { [productId: string]: ShoppingCartItem }) {
        for (const productId in itemsMap) {
            const item = itemsMap[productId];
            this.items.push(new ShoppingCartItem(item.product, item.quantity));
        }
    }

    getQuantity(product: Product) {
        const item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
    }

    get totalPrice() {
        return this.items
            .map(shopItem => shopItem.totalPrice)
            .reduce((price1, price2) => price1 + price2);
    }

    get totalItemsCount() {
        let count = 0;
        for (const productId in this.itemsMap)
            count += this.itemsMap[productId].quantity;
        return count;
    }
}
