import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components';
import { CalculadoraService } from './services';


//decorador que determina que é um modúlo
@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculadoraComponent
  ],
  providers:[
    CalculadoraService
  ]
  
})
export class CalculadoraModule { }
