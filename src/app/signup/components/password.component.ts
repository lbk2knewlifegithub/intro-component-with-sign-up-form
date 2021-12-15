import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lbk-password',
  template: `
    <div [formGroup]="parent">
      <div class="relative">
        <input
          formControlName="password"
          class="p-4 font-semibold"
          placeholder="Password"
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
        class="mt-2 text-xs italic font-semibold text-right text-danger"
      >
        Password cannot be empty
      </p>
      <!-- end email is required -->
    </div>
  `,
})
export class PasswordComponent {
  @Input() parent!: FormGroup;

  get required(): boolean {
    return this.password.dirty && this.password.hasError('required');
  }

  get password(): FormControl {
    return this.parent.get('password') as FormControl;
  }

  get error(): boolean {
    return this.password.dirty && !!this.password.errors;
  }
}
