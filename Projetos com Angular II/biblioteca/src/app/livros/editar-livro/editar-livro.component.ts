import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LivroService, Livro } from '../shared';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-livro',
  templateUrl: './editar-livro.component.html',
  styleUrls: ['./editar-livro.component.css']
})
export class EditarLivroComponent implements OnInit {



  @ViewChild('formLivro', {static:true})formLivro:NgForm
  livro:Livro;

  constructor(private livroService:LivroService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    const id = +this.route.snapshot.params['id'];
    this.livro = this.livroService.buscarPorId(id)
  }

  atualizar():void {
    if(this.formLivro.form.valid) {
      this.livroService.atualizar(this.livro);
      this.router.navigate(['/livros'])
    }
  }

}
