import { Component, OnInit } from '@angular/core';

declare var $:any;


@Component({
  selector: 'app-compontes',
  templateUrl: './compontes.component.html',
  styleUrls: ['./compontes.component.css']
})
export class CompontesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
         
          
      });
  
  });
  }
}