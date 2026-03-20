import { Component, Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Button } from '../button/button';

@Component({
  selector: 'app-article-card',
  imports: [RouterLink, CommonModule, Button],
  templateUrl: './article-card.html',
  styleUrl: './article-card.scss',
})
export class ArticleCard {
  @Input() article: any;

  constructor(private router: Router) {}

  goToArticle() {
    this.router.navigate(['/articles', this.article.slug]);
  }
}
