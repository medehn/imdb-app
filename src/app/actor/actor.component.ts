import { Component, OnInit } from '@angular/core';
import { IActor } from './actor';
import { ActorService } from './actor.service';
import { ACTORDATA } from './imdbdata';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss'],
})
export class ActorComponent implements OnInit {
  constructor(private actorService: ActorService) {}

  actorData: IActor = ACTORDATA;
  searchTerm: string = 'Jean Reno';

  getActorData(): void {
    this.actorData = this.actorService.getActorData();
  }

  ngOnInit(): void {
    this.getActorData();
  }
}
