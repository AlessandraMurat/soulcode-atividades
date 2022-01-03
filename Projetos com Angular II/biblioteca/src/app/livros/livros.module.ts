import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroService } from './shared';
import { ListarLivroComponent } from './listar-livro/listar-livro.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarLivroComponent } from './cadastrar-livro';
import { EditarLivroComponent } from './editar-livro';



@NgModule({
  declarations: [
    ListarLivroComponent,
    CadastrarLivroComponent,
    EditarLivroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],

  providers: [
    LivroService
  ]
})
export class LivrosModule { }
