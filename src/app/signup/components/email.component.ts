import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lbk-email',
  template: `
    <div [formGroup]="parent">
      <div class="relative">
        <input
          formControlName="email"
          class="p-4 font-semibold"
          placeholder="Email"
          type="text"
        />

        <img
          *ngIf="error"
          class="absolute -translate-y-1/2 top-1/2 right-6"
          src="/assets/images/icon-error.svg"
          alt="Error icon"
        />
      </div>

      <!-- email is required -->
      <p
        *ngIf="required"
        class="mt-2 text-sm italic font-semibold text-right text-danger"
      >
        Email cannot be empty
      </p>
      <!-- end email is required -->

      <!-- email is invalid -->
      <p
        *ngIf="emailInvalid"
        class="mt-2 text-sm italic font-semibold text-right text-danger"
      >
        Looks like this is not an email
      </p>
      <!-- end email is invalid -->
    </div>
  `,
})
export class EmailComponent {
  @Input() parent!: FormGroup;

  get required(): boolean {
    return this.email.dirty && this.email.hasError('required');
  }

  get email(): FormControl {
    return this.parent.get('email') as FormControl;
  }

  get error(): boolean {
    return this.email.dirty && !!this.email.errors;
  }

  get emailInvalid(): boolean {
    return this.email.dirty && this.email.hasError('email');
  }
}
