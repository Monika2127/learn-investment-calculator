import { FormControl, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export function valueShouldBePositive(control: FormControl): ValidationErrors | null {
    return control.value > 0 ? null : { greaterThan: true };
}