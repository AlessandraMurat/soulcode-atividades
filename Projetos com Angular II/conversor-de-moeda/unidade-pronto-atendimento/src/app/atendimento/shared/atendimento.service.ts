import { Injectable } from '@angular/core';
import { Atendimento } from './atendimento.model'

@Injectable()

export class AtendimentoService {

  constructor() { }

  listarTodos(): Atendimento[]{ 
    const atendimentos = localStorage['atendimentos'] 
    return atendimentos ? JSON.parse(atendimentos): [];
    
  }

  cadastrar(atendimento: Atendimento):void{
    const atendimentos = this.listarTodos();
   
    atendimentos.push(atendimento);
    localStorage['atendimentos'] = JSON.stringify(atendimentos)
  }

  buscarPorId (id: number):Atendimento {
    const atendimentos : Atendimento[] = this.listarTodos();
    return atendimentos.find(atendimento => atendimento.id === id);
  }

  atualizar (atendimento: Atendimento): void {
    const atendimentos : Atendimento[] = this.listarTodos();
    atendimentos.forEach((obj, index, objs)=> {
      if(atendimento.id === obj.id) {
        objs[index] = atendimento;
      }
    });
    localStorage ['atendimentos'] = JSON.stringify(atendimentos);
  }

  
  remover(id: number):void{
    let atendimentos: Atendimento[] = this.listarTodos();
    atendimentos = atendimentos.filter(atendimentos => atendimentos.id !== id);
    localStorage['atendimentos'] = JSON.stringify(atendimentos);
  }

}
