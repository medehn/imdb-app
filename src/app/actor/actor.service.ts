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
        this.actor = data;
        ACTORDATA.name = 'From API: ' + this.actor.expression;
        ACTORDATA.id = 'From API: ' + this.actor.results[0].id;
        this.http
          .get<any>(
            'https://imdb-api.com/en/API/Name/k_bui3yj8o/' +
              this.actor.results[0].id
          )
          .subscribe((data2) => {
            this.actor = data2;
            ACTORDATA.imageUrl = this.actor.image;
          });
      });

    return ACTORDATA;
  }
}
