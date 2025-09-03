import { Component, inject, Input } from '@angular/core';
import { AnnualData } from '../types/calculator.type';
import { CurrencyPipe } from '@angular/common';
import { CalculationService } from '../services/calculation.service';

@Component({
  selector: 'app-ms-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss'
})
export class InvestmentResultsComponent {

  private readonly calService = inject(CalculationService);

  get data() {
    return this.calService.annualData;
  }
}
