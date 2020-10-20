import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  ticker: string;

  constructor(
    private detailsService: DetailsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.ticker = params.ticker);
    this.detailsService.getDetails()
      .subscribe((data) => {
        console.log(this.ticker);
        console.log(data)
      });
  }
}
