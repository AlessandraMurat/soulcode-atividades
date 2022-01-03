import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentacaoComponent } from './documentacao';
import { DatabindingComponent } from './databinding';
import { RouterModule } from '@angular/router';
import { CompontesComponent } from './compontes/compontes.component';
import { ModulosComponent } from './modulos/modulos.component';
import { InjecaoComponent } from './injecao/injecao.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { PipesComponent } from './pipeExp/pipes.component';
import { RotasComponent } from './rotas/rotas.component';



@NgModule({
  declarations: [
    DocumentacaoComponent,
    DatabindingComponent,
    CompontesComponent,
    ModulosComponent,
    InjecaoComponent,
    DiretivasComponent,
    PipesComponent,
    RotasComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DocumentacaoModule { }
