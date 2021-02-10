export class ShoppingCartItem {
    $key: string;
    title: string;
    imageUrl: string;
    price: number;
    quantity: number;

    constructor(init?: Partial<ShoppingCartItem>) {
        Object.assign(this, init); // Assigining item object to the shopping cart items object
    }

    get totalPrice() {
        return this.price * this.quantity;
    }
}
