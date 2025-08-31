import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculationService } from '../services/calculation.service';
import { AnnualData, Calculator } from '../types/calculator.type';
import { valueShouldBePositive } from '../validators/input.validator';

@Component({
  selector: 'app-ms-user-input',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent implements OnInit {

  @Output() annualData = new EventEmitter<AnnualData[]>();
  form!: FormGroup;

  constructor(
    public readonly fb: FormBuilder,
    private readonly calService: CalculationService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      enteredInitialInvestment: [0, valueShouldBePositive],
      enteredAnnualInvestment: [0, valueShouldBePositive],
      enteredExpectedReturn: [5, valueShouldBePositive],
      enteredDuration: [10, valueShouldBePositive]
    })
  }

  onSubmit() {
    const formValue = this.form.getRawValue();
    if(this.form.valid) {
      const formValueToSend: Calculator = {
        initialInvestment: formValue.enteredInitialInvestment,
        annualInvestment: formValue.enteredAnnualInvestment,
        expectedReturn: formValue.enteredExpectedReturn,
        duration: formValue.enteredDuration
      }
      this.annualData.emit(this.calService.calculateInvestmentResults(formValueToSend));
    }
  }

  hasError(formControl: AbstractControl | null) {
    return formControl?.hasError('greaterThan')
  }
  
}
