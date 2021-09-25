import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtensionsRoutingModule } from './extensions-routing.module';
import {HomeComponent} from "./pages/home/home.component";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ExtensionsRoutingModule
  ]
})
export class ExtensionsModule { }
