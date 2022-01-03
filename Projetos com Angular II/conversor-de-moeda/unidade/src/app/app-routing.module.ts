import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacienteRoutes } from './pacientes';

export const router : Routes = [
    {
        path: '',
        redirectTo: 'pacientes/listar',
        pathMatch:'full'  //redireciona direto pra pasta raiz
    }, 
    ...PacienteRoutes
];

@NgModule({
    imports :[ RouterModule.forRoot(router)],
    exports :[ RouterModule]
})

export class AppRoutingModule {}