import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';
import { AtendimentoRoutes } from "./atendimento/atendimentos-routing.module";



export const router : Routes = [{
    path: '',
    redirectTo: 'atendimento/listar',
    pathMatch:'full'  
}, 
...AtendimentoRoutes  
];


@NgModule ({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})

export class AppRoutingModule {}