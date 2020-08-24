import { Component, OnInit } from '@angular/core';
import { HeroesService, heroesInterface } from '../../servicios/heroes.services';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})



export class HeroesComponent implements OnInit {


  heroes:heroesInterface[]=[];

  //Voy a utilizar el constructor para poder utilizar el servicio
  //en donde:
  //_heroesService será el alias de mi servicio
  //:HeroesService indico que mi servicio es de tipo HeroesService
  //con esto ya estaría usando el servicio
  constructor( private _heroesService:HeroesService, private _router:Router) {
    console.log('constructor');
  }


  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);
  }

  // verHeroe(index:number){
  //   console.log(index);
  //   //this._router.navigate( ['/heroe',index] )
  // }

}
