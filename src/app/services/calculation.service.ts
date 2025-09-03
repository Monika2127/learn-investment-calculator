import { Injectable, signal } from '@angular/core';
import { AnnualData, Calculator } from '../types/calculator.type';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor() { }

  annualData: AnnualData[] = [];
  // annualData = signal<AnnualData[] | undefined>(undefined);

  calculateInvestmentResults(formValue: Calculator) {
    let investmentValue = formValue.initialInvestment;
  
    for (let i = 0; i < formValue.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (formValue.expectedReturn / 100);
      investmentValue += interestEarnedInYear + formValue.annualInvestment;
      const totalInterest = investmentValue - formValue.annualInvestment * year - formValue.initialInvestment;
      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: formValue.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: formValue.initialInvestment + formValue.annualInvestment * year,
      });
    }

    // this.annualData.set(data);
  }
  
}
