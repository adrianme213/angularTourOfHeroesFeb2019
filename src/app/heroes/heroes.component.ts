import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Config } from '../../assets/config.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = Config.HERO;
  heroes: Hero[] = Config.HEROES;
  selectedHero: Hero;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}