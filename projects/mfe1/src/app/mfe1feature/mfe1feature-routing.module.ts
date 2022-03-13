import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mfe1featureComponent } from './mfe1feature.component';

const routes: Routes = [
  {
    path: '',
    component: Mfe1featureComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mfe1featureRoutingModule { }
