import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtensionsRoutingModule } from './extensions-routing.module';
import {UiLibraryModule} from "../ui-library/ui-library.module";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ExtensionsRoutingModule,
    UiLibraryModule,
  ],
  exports: [
    UiLibraryModule,
  ]
})
export class ExtensionsModule { }
