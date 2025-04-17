import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ProductsComponentComponent} from './products-component/products-component.component';
import {ShoppingCartComponentComponent} from './shopping-cart-component/shopping-cart-component.component';
import {
  CalculationComponentComponent
} from './shopping-cart-component/calculation-component/calculation-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ProductsComponentComponent, ShoppingCartComponentComponent, CalculationComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Final-Exam-Geoffrey';
}
