import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lbk-first-name',
  template: `
    <div [formGroup]="parent">
      <div class="relative">
        <input
          formControlName="firstName"
          class="p-4 font-semibold"
          placeholder="First Name"
          type="text"
        />

        <img
          *ngIf="error"
          class="absolute -translate-y-1/2 top-1/2 right-6"
          src="/assets/images/icon-error.svg"
          alt="Error icon"
        />
      </div>
      <p
        *ngIf="required"
        class="mt-2 text-sm italic font-semibold text-right text-danger"
      >
        First Name cannot be empty
      </p>
    </div>
  `,
})
export class FirstNameComponent {
  @Input() parent!: FormGroup;

  get required(): boolean {
    return this.firstName.dirty && this.firstName.hasError('required');
  }

  get firstName(): FormControl {
    return this.parent.get('firstName') as FormControl;
  }

  get error(): boolean {
    return this.firstName.dirty && !!this.firstName.errors;
  }
}
