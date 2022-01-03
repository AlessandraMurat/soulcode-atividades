import { Component, OnInit } from '@angular/core';
import { LivroService, Livro } from '../shared';

@Component({
  selector: 'app-listar-livro',
  templateUrl: './listar-livro.component.html',
  styleUrls: ['./listar-livro.component.css']
})
export class ListarLivroComponent implements OnInit {

  livros: Livro[];

  constructor(private livroService : LivroService) { }

  ngOnInit() {

    this.livros = this.listarLivros();
    
  }
  listarLivros(): Livro[] {
    return this.livroService.listarLivros();
   
  }

  remover($event:any, livro:Livro):void {
    $event.preventDefault();
    if(confirm('Deseja remover o livro"'+ livro.id  + '"?')){
      this.livroService.remover(livro.id);
      this.livros = this.listarLivros();
    }
  }
  

}
