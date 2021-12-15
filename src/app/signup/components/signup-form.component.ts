import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'lbk-signup-form',
  template: `
    <form
      [formGroup]="form"
      (ngSubmit)="onSubmit($event)"
      class="grid w-full gap-4 p-4 bg-white rounded-lg shadow-lg sm:gap-6 lg:p-8"
    >
      <!-- first name -->
      <lbk-first-name [parent]="form"></lbk-first-name>
      <!-- end first name -->

      <!-- last name -->
      <lbk-last-name [parent]="form"></lbk-last-name>
      <!-- end last name -->

      <!-- email accress -->
      <lbk-email [parent]="form"></lbk-email>
      <!-- end email acress -->

      <!-- password -->
      <lbk-password [parent]="form"></lbk-password>
      <!-- end password -->

      <!-- submit -->
      <button [disabled]="form.invalid" class="w-full btn btn-success">
        Clam your free trial
      </button>
      <!-- end submit -->

      <!-- text -->
      <div class="text-sm text-center">
        <span class="text-muted"
          >By clicking the button, are agreeing to our
        </span>
        <a
          href="#"
          class="font-bold text-danger hover:border-b hover:border-danger"
          >Terms and Services</a
        >
      </div>
      <!-- end text -->
    </form>
  `,
})
export class SignupFormComponent {
  form!: FormGroup;

  constructor(_fb: FormBuilder) {
    this.form = _fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get email() {
    return this.form.get('email') as FormControl;
  }

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    if (this.form.invalid) return;

    alert('Submitted!');
  }
}
