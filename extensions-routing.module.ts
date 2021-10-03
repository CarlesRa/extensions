import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

export const extensionsRoutes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
];

@NgModule({
  imports: [],
  exports: []
})
export class ExtensionsRoutingModule { }
