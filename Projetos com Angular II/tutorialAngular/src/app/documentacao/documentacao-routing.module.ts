import { Routes } from '@angular/router';
import { CompontesComponent } from './compontes';
import { DatabindingComponent } from './databinding';
import { DiretivasComponent } from './diretivas';
import { DocumentacaoComponent } from './documentacao';
import { InjecaoComponent } from './injecao';
import { ModulosComponent } from './modulos';
import { PipesComponent } from './pipeExp';
import { RotasComponent } from './rotas';



export const DocumentacaoRoutes: Routes = [
  {
    path: 'documentacao',
    component:DocumentacaoComponent

  },
  {
    path: 'databinding',
    component: DatabindingComponent
  },
  {
    path: 'componentes',
    component: CompontesComponent
  },
  {
    path: 'modulos',
    component: ModulosComponent
  },

  {
    path: 'injecao',
    component: InjecaoComponent
  },
  {
    path: 'diretivas',
    component: DiretivasComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'rotas',
    component: RotasComponent
  }

];