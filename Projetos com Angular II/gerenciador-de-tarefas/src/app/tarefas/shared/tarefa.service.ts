import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model'

@Injectable()
export class TarefaService {

  constructor() { }

  listarTodos ():Tarefa[] {

    //O localStorage recebe em string
    const tarefas = localStorage['tarefas'];
    //o JSON.parse converte de string para objeto
    return tarefas ? JSON.parse(tarefas): [];
  }


  cadastrar(tarefa: Tarefa):void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);

  }

  buscarPorId (id: number):Tarefa {
    const tarefas : Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizar (tarefa: Tarefa): void {
    const tarefas : Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs)=> {
      if(tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage ['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number):void {
    const tarefas : Tarefa[] = this.listarTodos();
    tarefas.forEach((obj,index,objs)=>{
      if (id === obj.id){
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }


}
