import { ShoppingCartService } from './../shopping-cart.service';
import { Component, Input } from '@angular/core';
import { Product } from '../models/product';


@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('showActions') showActions = true;
  @Input('shoppingCart') shoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
