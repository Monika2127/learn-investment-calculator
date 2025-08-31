import { Injectable } from '@angular/core';
import { Calculator } from '../types/calculator.type';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor() { }

  calculateInvestmentResults(formValue: Calculator) {
    const annualData = [];
    let investmentValue = formValue.initialInvestment;
  
    for (let i = 0; i < formValue.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (formValue.expectedReturn / 100);
      investmentValue += interestEarnedInYear + formValue.annualInvestment;
      const totalInterest = investmentValue - formValue.annualInvestment * year - formValue.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: formValue.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: formValue.initialInvestment + formValue.annualInvestment * year,
      });
    }
  
    return annualData;
  }
  
}
