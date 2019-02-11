import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { Config } from '../assets/config.service';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(public messageService: MessageService) { }
  
  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage('HeroService: fetched heroes');
    return of(Config.HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.addMessage(`HeroService: Fetched hero id=${id}`);
    return of(Config.HEROES.find(hero => hero.id === id));
  }

}
