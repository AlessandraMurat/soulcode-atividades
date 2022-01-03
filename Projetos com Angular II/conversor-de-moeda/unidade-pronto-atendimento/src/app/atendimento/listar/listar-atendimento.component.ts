import { Component, OnInit } from '@angular/core';
import { AtendimentoService, Atendimento } from '../shared';

@Component({
  selector: 'app-listar-atendimento',
  templateUrl: './listar-atendimento.component.html',
  styleUrls: ['./listar-atendimento.component.css']
})
export class ListarAtendimentoComponent implements OnInit {

  atendimentos: Atendimento[];  //vem do model

  constructor(private atendimentoService : AtendimentoService) { }

  ngOnInit() {
    this.atendimentos = this.listarTodos();
  }
  listarTodos(): Atendimento[]{
    return this.atendimentoService.listarTodos();
  }

}
