import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mfe1featureRoutingModule } from './mfe1feature-routing.module';
import { Mfe1featureComponent } from './mfe1feature.component';


@NgModule({
  declarations: [
    Mfe1featureComponent
  ],
  imports: [
    CommonModule,
    Mfe1featureRoutingModule
  ]
})
export class Mfe1featureModule { }
