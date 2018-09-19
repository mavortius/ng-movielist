import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movie/movie.component';
import { MovielistComponent } from './movielist/movielist.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';

const routes: Routes = [
  { path: 'popular', component: PopularMoviesComponent },
  { path: 'search/:term', component: SearchResultsComponent },
  { path: '', redirectTo: 'popular', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieComponent,
    MovielistComponent,
    SearchboxComponent,
    SpinnerComponent,
    SearchResultsComponent,
    PopularMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
