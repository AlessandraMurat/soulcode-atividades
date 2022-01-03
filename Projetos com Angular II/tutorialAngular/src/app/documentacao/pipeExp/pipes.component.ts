import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  livro : any = {
    titulo: "Testando"
  }

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });

    });
  }

}