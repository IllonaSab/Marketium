import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApolloService } from '../../services/apollo';

import { ArticleCard } from '../../components/article-card/article-card';
import { Hero } from '../../components/hero/hero';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ArticleCard, Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  articles: any[] = [];

  constructor(
    private apolloService: ApolloService,
    private router: Router,
    private titleService: Title,
    private metaService: Meta,
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Marketium - Lifestyle, Food & Luxe');
    this.apolloService.getArticles(1, 5).subscribe((data: any) => {
      this.articles = data.articles;
    });
  }

  goToArticles() {
    this.router.navigate(['/articles']);
  }
}
