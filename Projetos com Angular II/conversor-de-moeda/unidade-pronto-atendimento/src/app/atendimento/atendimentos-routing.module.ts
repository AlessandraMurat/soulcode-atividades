import { Routes } from '@angular/router';
import { CadastrarAtendimentoComponent } from './cadastrar';
import { ListarAtendimentoComponent } from './listar';
import {EditarAtendimentoComponent} from './editar'


export const AtendimentoRoutes: Routes = [
    { 
        path:'atendimento',
        redirectTo: 'atendimento/listar'
    }, 
    { 
        path:'atendimento/listar',
        component: ListarAtendimentoComponent
    },

    {
        path:"atendimento/cadastrar",
        component: CadastrarAtendimentoComponent
    },
    {
        path:"atendimento/editar/:id",
        component: EditarAtendimentoComponent
}

];