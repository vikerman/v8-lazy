import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';

const routes: Routes = [
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
  { path: '', component: EmptyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
