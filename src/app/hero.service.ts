import { Injectable } from '@angular/core';
import { Hero } from './hero';
impoer { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

    getHeroes() : Hero[] {
        return HEROES;
    }

}
