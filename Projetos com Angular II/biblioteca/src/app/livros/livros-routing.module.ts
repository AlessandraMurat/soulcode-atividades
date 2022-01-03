import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { EditarLivroComponent } from "./editar-livro";
import { CadastrarLivroComponent } from "./cadastrar-livro";
import { ListarLivroComponent } from "./listar-livro";


export const LivroRoutes : Routes = [
    {
        path: 'livros',
        redirectTo: 'livros/listar-livro'
    },
    {
        path: 'livros/listar-livro',
        component: ListarLivroComponent
    },

    {
        path: 'livros/cadastrar-livro',
        component: CadastrarLivroComponent
    },

    
    {
        path:"livros/editar-livro/:id",
        component: EditarLivroComponent
    }

]