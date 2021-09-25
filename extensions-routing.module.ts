import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

export const extensionsRoutes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [],
  exports: []
})
export class ExtensionsRoutingModule { }
