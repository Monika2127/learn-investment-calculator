export interface Calculator {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
}

export interface AnnualData {
    year: number;
    annualInvestment: number;
    interest: number;
    totalAmountInvested: number;
    totalInterest: number;
    valueEndOfYear: number;
}