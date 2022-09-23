import { Injectable } from '@angular/core';
import { IActor } from './actor';
import { ACTORDATA } from './imdbdata';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor() { }

  getActorData(): IActor {
    return ACTORDATA;
  }
}
