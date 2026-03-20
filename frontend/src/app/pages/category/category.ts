import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApolloService } from '../../services/apollo';

@Component({
  selector: 'app-category',
  imports: [RouterLink, CommonModule],
  templateUrl: './category.html',
  styleUrl: './category.scss',
})
export class Category implements OnInit {
  articles: any[] = [];
  categoryName: string = '';
  categorySlug: string = '';

  constructor(
    private route: ActivatedRoute,
    private apolloService: ApolloService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.categorySlug = params['slug'];
      this.apolloService.getArticlesByCategory(this.categorySlug).subscribe((articles) => {
        this.articles = articles;
        if (articles.length > 0) {
          this.categoryName = articles[0].category?.nom;
        }
      });
    });
  }
}
