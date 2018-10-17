import { Component, OnInit, Inject } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-about',
  moduleId: module.id,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  leaders: Leader[];
  errMess: string;
  constructor(
    private leaderService: LeaderService,
    @Inject('baseURL') public baseURL
  ) {}

  ngOnInit() {
    this.leaderService
      .getLeaders()
      .subscribe(
        leader => (this.leaders = leader),
        errmess => (this.errMess = <any>errmess)
      );
  }
}
