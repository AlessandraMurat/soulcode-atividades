import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TarefaRoutes } from "./tarefas";



//Dentro dos colchetes é onde irão as rotas
export const router: Routes = [

    {
        path: '',
        redirectTo:'/tarefas/listar',
        //o full vai reddirecionar direto para o caminho acima
        pathMatch:'full'
    },
    ...TarefaRoutes
];



//Para referenciar esse modulo vamos usar o AppRoutingMOdule


@NgModule ({
    //use o foRoot que é um metodo especifico de configuração de rotas
    imports: [RouterModule.forRoot(router)],
    exports: [
        RouterModule, 
        
    ]
})
export class AppRoutingModule {}