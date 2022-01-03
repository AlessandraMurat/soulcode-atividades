import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './components';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PrincipalModule { }
