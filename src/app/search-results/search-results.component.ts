import { Component, OnInit } from '@angular/core';

import { SearchResults as Results } from 'moviedb-promise';

import { MovieApiService } from '../api/movie-api.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent implements OnInit {
  searchTerm: string;
  header = 'You search results';
  isLoading = false;
  results: Results;

  constructor(private api: MovieApiService) { }

  ngOnInit() {
    this.searchTerm = '';
    this.isLoading = true;

    this.api.search(this.searchTerm)
      .then(results => this.results = results);

    this.header = this.results.total_results > 0
          ? `Found ${this.results.total_results} movies that matched "${this.searchTerm}"`
          : `Didn't find any results for "${this.searchTerm}"`;

    this.isLoading = false;
  }

}
