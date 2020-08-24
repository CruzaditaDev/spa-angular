import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../servicios/heroes.services';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private _heroesService: HeroesService, private _router: Router) { 

  }

  ngOnInit(): void {
  }

  getHeroesText( termino: string){
    event.preventDefault();
    console.log(termino);
    this._router.navigate( ['/resultados',termino] )
  }

}
