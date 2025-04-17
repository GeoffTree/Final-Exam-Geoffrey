import { Injectable } from '@angular/core';
import  {Product} from '../products-component/product';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  productList: Product[] = [
    {id: 1, productName: 'Laptop', price: 1500, quantity: 5},
    {id: 2, productName: 'Cell Phone', price: 1000, quantity: 10},
    {id: 3, productName: 'Mouse', price: 35, quantity: 15},
    {id: 4, productName: 'Lamp', price: 50, quantity: 7},
  ];

  shoppingCart: Product[] = [];

  addProductToCart(product: Product) {
    const existing = this.shoppingCart.find(p=> p.id === product.id);
    if (existing) {existing.quantity! += 1;
    } else {
      this.shoppingCart.push({...product, quantity: 1});
    }
  }

  constructor() { }
  getSubtotal(): number {
    return this.shoppingCart.reduce((acc, item) => acc + (item.price! * item.quantity!), 0);
  }

  getTax(): number {
    return this.getSubtotal() * 0.13;
  }

  getTotal(): number {
    return this.getSubtotal() + this.getTax();
  }


}
