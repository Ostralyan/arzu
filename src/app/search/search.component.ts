import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  control = new FormControl();
  tickers: string[] = ['NFLX | Netflix', 'AAPL | Apple', 'MSFT | Microsoft', 'Ticker Four'];
  filteredTickers: Observable<string[]>;
  street: string = "";

  constructor(
    private router: Router) { }

  ngOnInit() {
    this.filteredTickers = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.tickers.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  onSubmit(): void {
    this.router.navigate(['/details/' + this.control.value.split("|")[0].trim()]);
  }

}
