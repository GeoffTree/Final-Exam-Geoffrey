import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import {NgIf} from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-calculation-component',
  templateUrl: './calculation-component.component.html',
  imports: [
    NgIf,
    RouterOutlet
  ],
  standalone: true
})
export class CalculationComponentComponent {
  constructor(public service: ServiceService) {}
}
