import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //hero = "WindStorm";
  //hero: Hero = {
  //  id: 1,
  //  name: 'Windstorm'
  //};
  heroes = HEROES;
  selectedHero: Hero;

  // Primeiro vem o constructor
  constructor() {
  }

  // Depois vem o ngOnInit
  ngOnInit() {
  }

  // Depois vem outros metodos
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }  
}
