import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.services';



@Component({
  selector: 'app-resultadosbusqueda',
  templateUrl: './resultadosbusqueda.component.html'
})
export class ResultadosbusquedaComponent implements OnInit {

  heroes:any={};
  termino='';
  @Input() heroe:any={};

  constructor( private _activatedRoute:ActivatedRoute, private _heroesService:HeroesService ) {  

    this._activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroesText( params['termino'] ) 
      //console.log(this.heroes);
    } )

  }

  ngOnInit(): void {
  }

}
