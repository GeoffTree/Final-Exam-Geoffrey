import { Routes } from '@angular/router';
import {ProductsComponentComponent} from './products-component/products-component.component';
import {ShoppingCartComponentComponent} from './shopping-cart-component/shopping-cart-component.component';
import {CalculationComponentComponent} from './shopping-cart-component/calculation-component/calculation-component.component';

export const routes: Routes = [
  {path: 'products-component', component: ProductsComponentComponent},
  {path: 'shoppingcart-component', component: ShoppingCartComponentComponent,
    children: [
      {path: 'calculation', component: CalculationComponentComponent}
    ]
  }
];
