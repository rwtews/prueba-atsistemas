import { Component, OnInit } from '@angular/core';
import { RoutingWithoutChangingService } from 'src/app/shared/services/routing-without-changing/routing-without-changing.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  constructor(
    private routingWithoutChangingService: RoutingWithoutChangingService
  ) { }

  ngOnInit(): void {}

}
