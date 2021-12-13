import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupFormComponent } from './components';
import { SignupPageComponent } from './containers';
import { SignupRoutingModule } from './signup-routing.module';

const COMPONENTS = [SignupFormComponent];
const CONTAINERS = [SignupPageComponent];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SignupRoutingModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class SignupModule {}
