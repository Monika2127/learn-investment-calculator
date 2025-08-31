import { Component, Input } from '@angular/core';
import { AnnualData } from '../types/calculator.type';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-ms-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss'
})
export class InvestmentResultsComponent {

  @Input({ required: true }) data!: AnnualData[];

}
