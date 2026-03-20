import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchInput } from '../search/search';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule, SearchInput],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(private router: Router) {}

  onSearch(query: string) {
    this.router.navigate(['/articles'], {
      queryParams: { search: query },
    });
  }
}
