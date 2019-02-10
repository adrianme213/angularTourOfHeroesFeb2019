import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero;
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }


  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    console.log(hero)
    this.heroService.messageService.addMessage(`Selected this hero: ${hero.name}`);
    this.selectedHero = hero;
  }

}
