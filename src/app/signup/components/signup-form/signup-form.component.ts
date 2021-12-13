import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'lbk-signup-form',
  templateUrl: './signup-form.component.html',
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

  get firstName(): FormControl {
    return this.form.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.form.get('lastName') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get email() {
    return this.form.get('email') as FormControl;
  }

  onSubmit($event: any) {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    alert('Submitted!');
  }
}
