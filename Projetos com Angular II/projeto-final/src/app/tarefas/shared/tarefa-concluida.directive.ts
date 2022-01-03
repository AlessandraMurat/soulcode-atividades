import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[TarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {
  @Input() TarefaConcluida:boolean;

  constructor(private el:ElementRef) { }


  ngOnInit() {
    if(this.TarefaConcluida) {
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
