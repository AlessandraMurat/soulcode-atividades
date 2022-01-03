import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DocumentacaoRoutes } from "./documentacao/documentacao-routing.module";
import { InstalacaoRoutes } from "./instalacao/intalacao-routing.module";
import { PrincipalRoutes } from "./principal/principal-routing.module";






export const routes:Routes = [
    {
        path: '',
        redirectTo:'/principal',
        pathMatch: 'full'
    },
    ...PrincipalRoutes,
    ...InstalacaoRoutes,
    ...DocumentacaoRoutes,
    
    // ...JogodaVelhaRoutes,
   

 
];

@NgModule ({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}
