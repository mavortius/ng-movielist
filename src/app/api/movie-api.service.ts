import { Injectable } from '@angular/core';

import MovieDB, { Configuration, Movie } from 'moviedb-promise';

import { environment } from '../../environments/environment';

const client = new MovieDB(environment.apiKey);
let config: Configuration;

client.configuration().then(c => (config = c));

const fixProfilePaths = (movies: Movie[]) => {
  return movies.filter(movie => movie.poster_path).map(movie => {
    return Object.assign(movie, {
      poster_path: `${config.images.secure_base_url}/w500${movie.poster_path}`
    });
  });
};

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  search(query: string) {
    return client.searchMovie({ query }).then(result =>
      Object.assign(result, {
        results: fixProfilePaths(result.results)
      })
    );
  }

  popularMovies() {
    return client
      .miscPopularMovies()
      .then(result => fixProfilePaths(result.results));
  }
}
