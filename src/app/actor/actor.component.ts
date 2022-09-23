import { Component, OnInit } from '@angular/core';
import { IActor } from './actor';
import { ActorService } from './actor.service';
import { ACTORDATA } from './imdbdata';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {

  constructor(private actorService : ActorService) {}

  actor: IActor = ACTORDATA;
  

  getActorData(): void{
    this.actor = this.actorService.getActorData();
  }

  ngOnInit(): void {
    this.getActorData();
    console.log(this.actor.knownFor[0].title)
  }

}
