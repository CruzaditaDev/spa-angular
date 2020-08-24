import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.services';
import { Route } from '@angular/router';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any={};
  casaImage:string='';

  constructor( private _activatedRoute: ActivatedRoute, private _heroeService:HeroesService) { 

    this._activatedRoute.params.subscribe( params => {
      this.heroe = this._heroeService.getHeroe(params['id']);
      (this.heroe.casa == 'DC') ? this.casaImage = '../../assets/img/dc.jpeg' : this.casaImage = '../../assets/img/marvell.png';
    } )
  
  }

}
