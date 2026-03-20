import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Button } from '../button/button';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule, Button],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class SearchInput {
  @Input() placeholder: string = 'Rechercher...';
  @Output() searched = new EventEmitter<string>();

  searchQuery: string = '';
  searchIcon = `<img src="/search.png" width="15" height="15" alt="rechercher" />`;
  onSearch() {
    if (this.searchQuery.trim()) {
      this.searched.emit(this.searchQuery);
    }
  }
}
