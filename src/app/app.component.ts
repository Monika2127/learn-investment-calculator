import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { AnnualData } from './types/calculator.type';

@Component({
  selector: 'app-ms-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'Investment Calculator';
  annualData: AnnualData[] = [];

  onGettingCalculatedData(data: AnnualData[]) {
    console.log("data", data)
    this.annualData = data;
  }

}
