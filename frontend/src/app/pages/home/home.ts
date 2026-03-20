import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ApolloService } from '../../services/apollo';
import { CommonModule } from '@angular/common';

import { ArticleCard } from '../../components/article-card/article-card';
import { Button } from '../../components/button/button';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ArticleCard, Button],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  articles: any[] = [];

  constructor(
    private apolloService: ApolloService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.apolloService.getArticles().subscribe((articles) => {
      this.articles = articles.slice(0, 5);
    });
  }
  goToArticles() {
    this.router.navigate(['/articles']);
  }
}
