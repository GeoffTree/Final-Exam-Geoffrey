import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Product } from '../products-component/product';
import {RouterOutlet} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-shopping-cart-component',
  imports: [
    RouterOutlet,
    NgForOf,
    NgIf
  ],
  templateUrl: './shopping-cart-component.component.html',
  styleUrl: './shopping-cart-component.component.css'
})
export class ShoppingCartComponentComponent {
  shoppingCart: Product[] = [];

  constructor(public service: ServiceService) {
    this.shoppingCart = this.service.shoppingCart;
  }
}
