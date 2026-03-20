import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ApolloService } from '../../services/apollo';

import { Button } from '../../components/button/button';
import { ArticleCard } from '../../components/article-card/article-card';
import { Pagination } from '../../components/pagination/pagination';

@Component({
  selector: 'app-articles',
  imports: [CommonModule, ArticleCard, Button, Pagination],
  templateUrl: './articles.html',
  styleUrl: './articles.scss',
})
export class Articles implements OnInit {
  articles: any[] = [];
  categories: any[] = [];
  selectedCategory: string = 'all';
  searchQuery: string = '';
  currentPage: number = 1;
  pageCount: number = 1;
  pageSize: number = 6;

  constructor(
    private apolloService: ApolloService,
    private route: ActivatedRoute,
    private titleService: Title,
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Tous les articles - Marketium');
    this.apolloService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });

    this.route.queryParams.subscribe((params) => {
      if (params['search']) {
        this.searchQuery = params['search'];
        this.apolloService.searchArticles(this.searchQuery).subscribe((articles) => {
          this.articles = articles;
        });
      } else {
        this.loadArticles();
      }
    });
  }

  loadArticles() {
    this.apolloService.getArticles(this.currentPage, this.pageSize).subscribe((data: any) => {
      this.articles = data.articles;
      this.pageCount = data.pageInfo.pageCount;
    });
  }

  filterByCategory(slug: string) {
    this.selectedCategory = slug;
    this.searchQuery = '';
    this.currentPage = 1;
    if (slug === 'all') {
      this.loadArticles();
    } else {
      this.apolloService.getArticlesByCategory(slug).subscribe((articles) => {
        this.articles = articles;
      });
    }
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadArticles();
  }
}
