import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DadosService } from './dados.service';

declare var google: any;

@Component({
  selector: 'app-dashboard-covid',
  templateUrl: './dashboard-covid.component.html',
  styleUrls: ['./dashboard-covid.component.css']
})
export class DashboardCovidComponent implements OnInit {
  @ViewChild("dashboardForm", {static: true}) dashboardForm?: NgForm;
  private dados: any;
  

  constructor(private dadosService: DadosService) { }
 

  ngOnInit() {
    this.dadosService.obterDados().subscribe(
      dados => {
        this.dados = dados;
        this.init();
      });
  }


  init(): void {
    if (typeof (google) !== 'undefined') {
      google.charts.load('current', { 'packages': ['corechart'] });
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.exibirGraficos());
      }, 1000);
    }
  }

  exibirGraficos(): void {
    this.exibirPieChart();

  }

  exibirPieChart(): void {
    const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

 
  obterDataTable(): any {
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.dados);

    return data;
  }

  /**
   * Retorna as opções do gráfico, que incluem o título
   * e tamanho do gráfico.
   *
   * @return any
   */
  obterOpcoes(): any {
    return {
      'title': 'Quantidade de casos de Covid 2021',
      'width': 400,
      'height': 300
    };
  }

}