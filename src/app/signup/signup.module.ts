import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  EmailComponent,
  FirstNameComponent,
  LastNameComponent,
  PasswordComponent,
  SignupFormComponent
} from './components';
import { SignupPageComponent } from './containers';
import { SignupRoutingModule } from './signup-routing.module';

const COMPONENTS = [
  SignupFormComponent,
  FirstNameComponent,
  LastNameComponent,
  EmailComponent,
  PasswordComponent,
];
const CONTAINERS = [SignupPageComponent];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SignupRoutingModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class SignupModule {}
