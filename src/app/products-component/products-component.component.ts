import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Product } from './product';
import {NgForOf} from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-products-component',
  imports: [
    NgForOf,
    RouterOutlet
  ],
  templateUrl: './products-component.component.html',
  styleUrl: './products-component.component.css'
})
export class ProductsComponentComponent {
  productList: Product[]= [];

  constructor(private service: ServiceService) {
    this.productList = this.service.productList;
  }
  addToCart(product: Product) {
    this.service.addProductToCart(product);
  }
}
