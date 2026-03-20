import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Button } from '../button/button';


@Component({
  selector: 'app-pagination',
  imports: [CommonModule, Button],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
})
export class Pagination {
  @Input() currentPage: number = 1;
  @Input() pageCount: number = 1;
  @Output() pageChanged = new EventEmitter<number>();

  get pages(): number[] {
    return Array.from({ length: this.pageCount }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.pageCount) {
      this.pageChanged.emit(page);
    }
  }
}
