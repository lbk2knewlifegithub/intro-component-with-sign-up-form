import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lbk-last-name',
  template: `
    <div [formGroup]="parent">
      <div class="relative">
        <input
          formControlName="lastName"
          class="p-4 font-semibold"
          placeholder="Last Name"
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
        Last Name cannot be empty
      </p>
    </div>
  `,
})
export class LastNameComponent {
  @Input() parent!: FormGroup;

  get required(): boolean {
    return this.lastName.dirty && this.lastName.hasError('required');
  }

  get lastName(): FormControl {
    return this.parent.get('lastName') as FormControl;
  }

  get error(): boolean {
    return this.lastName.dirty && !!this.lastName.errors;
  }
}
