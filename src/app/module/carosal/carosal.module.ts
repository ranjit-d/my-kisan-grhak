import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarosalComponent } from 'src/app/components/carosal/carosal.component';


@NgModule({
  declarations: [CarosalComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CarosalComponent
  ]
})
export class CarosalModule { }
