import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-injecao',
  templateUrl: './injecao.component.html',
  styleUrls: ['./injecao.component.css']
})
export class InjecaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });

    });
  }

}