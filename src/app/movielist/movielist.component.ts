import { Component, Input } from '@angular/core';

import { Movie } from 'moviedb-promise';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent {
  @Input()
  movies: Movie[];

  @Input()
  title: string;
}
