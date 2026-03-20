import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApolloService } from '../../services/apollo';

@Component({
  selector: 'app-articles',
  imports: [RouterLink, CommonModule],
  templateUrl: './articles.html',
  styleUrl: './articles.scss',
})
export class Articles implements OnInit {
  articles: any[] = [];
  categories: any[] = [];
  selectedCategory: string = 'all';
  searchQuery: string = '';

  constructor(
    private apolloService: ApolloService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
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
        this.apolloService.getArticles().subscribe((articles) => {
          this.articles = articles;
        });
      }
    });
  }

  filterByCategory(slug: string) {
    this.selectedCategory = slug;
    this.searchQuery = '';
    if (slug === 'all') {
      this.apolloService.getArticles().subscribe((articles) => {
        this.articles = articles;
      });
    } else {
      this.apolloService.getArticlesByCategory(slug).subscribe((articles) => {
        this.articles = articles;
      });
    }
  }
}
