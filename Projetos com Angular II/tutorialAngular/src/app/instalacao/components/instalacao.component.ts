import { Version } from '@angular/compiler';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-instalacao',
  templateUrl: './instalacao.component.html',
  styleUrls: ['./instalacao.component.css']
})
export class InstalacaoComponent implements OnInit {

  name = 'Angular' + VERSION.major;
  info = 'Subscribe to EfficientUser'

  constructor() { }

  ngOnInit(): void {
  }

  

}
