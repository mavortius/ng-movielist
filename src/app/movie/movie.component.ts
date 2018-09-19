import { Component, Input } from '@angular/core';

import { Movie as MovieModel } from 'moviedb-promise';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input() model: MovieModel;
  isHovering = false;

  mouseOver() {
    this.isHovering = true;
  }

  mouseOut() {
    this.isHovering = false;
  }
}
