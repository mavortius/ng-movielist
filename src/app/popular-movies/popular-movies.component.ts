import { Component, OnInit } from '@angular/core';

import { Movie } from 'moviedb-promise';

import { MovieApiService } from './../api/movie-api.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html'
})
export class PopularMoviesComponent implements OnInit {
  movies: Movie[];

  constructor(private api: MovieApiService) { }

  ngOnInit() {
    this.api.popularMovies()
      .then(movies => this.movies = movies);
  }

}
