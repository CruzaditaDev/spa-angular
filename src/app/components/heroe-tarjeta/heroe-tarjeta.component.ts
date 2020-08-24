import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  constructor(private _router:Router) { }

  @Input() heroe:any = {}; 

  ngOnInit(): void {
  }

  verHeroe(index:number){
    this._router.navigate( ['/heroe',index] )
  }

}
