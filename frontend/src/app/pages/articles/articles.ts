import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
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

  constructor(private apolloService: ApolloService) {}

  ngOnInit() {
    this.apolloService.getArticles().subscribe((articles) => {
      this.articles = articles;
    });
    this.apolloService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  filterByCategory(slug: string) {
    this.selectedCategory = slug;
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
