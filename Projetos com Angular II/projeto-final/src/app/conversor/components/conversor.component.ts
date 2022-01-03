import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Conversao, ConversaoResponse, Moeda } from '../models';

import { MoedaService, ConversorService } from '../services';


@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
  moedas: Moeda[]; 
   conversao: Conversao;
   possuiErro: boolean;
   conversaoResponse: ConversaoResponse;
 

  @ViewChild('conversaoForm', { static: true }) conversaoForm: NgForm;

  constructor(private moedaService: MoedaService,
    private conversorService: ConversorService) { }

    ngOnInit() {
      this.moedas = this.moedaService.listarTodas();
      this.init();
    }
  
    /**
     * Efetua a chamada para a conversão dos valores
     * @return void
     */
    init(): void {
      this.conversao = new Conversao('EUR', 'BRL', null);
      //Para não ser inicializado a mensagem de erros
      this.possuiErro = false;
    }
  
    /**
     * Efetua a chamada para a conversão dos valor
     */
    converter(): void {
      if (this.conversaoForm.form.valid) {
        this.conversorService.converter(this.conversao).subscribe(response => (this.conversaoResponse = response),error => (this.possuiErro = true));
      }
    }
  }
