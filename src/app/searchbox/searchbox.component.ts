import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html'
})
export class SearchboxComponent {
  @Input() searchTerm: string;

  constructor(private router: Router) { }

  doSearch() {
    // tslint:disable-next-line:no-non-null-assertion
    if (this.searchTerm && this.searchTerm! + '') {
      this.router.navigateByUrl(`search/${this.searchTerm}`);
    }
  }
}
