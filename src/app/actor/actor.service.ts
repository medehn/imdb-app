import { Injectable } from '@angular/core';
import { IActor } from './actor';
import { ACTORDATA } from './imdbdata';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  constructor(private http: HttpClient) {}

  actor: any | undefined;
  getActorData(): IActor {
    this.http
      .get<any>('https://imdb-api.com/en/API/SearchName/k_bui3yj8o/Jean%20Reno')
      .subscribe((data) => {
        console.log(data);
        this.actor = data;
        ACTORDATA.name = "From API: "+ this.actor.expression;
        ACTORDATA.id = "From API: "+this.actor.results[0].id;
        console.log(ACTORDATA)
      });

    return ACTORDATA;
  }
}
