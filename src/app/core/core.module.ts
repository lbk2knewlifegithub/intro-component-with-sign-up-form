import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components';
import { AppComponent } from './containers';

const COMPONENTS = [FooterComponent];
const CONTAINERS = [AppComponent];
@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class CoreModule {}
