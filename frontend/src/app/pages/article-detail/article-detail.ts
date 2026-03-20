import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApolloService } from '../../services/apollo';

import { RichTextPipe } from '../../pipes/rich-text-pipe';

@Component({
  selector: 'app-article-detail',
  imports: [RouterLink, CommonModule, RichTextPipe],
  templateUrl: './article-detail.html',
  styleUrl: './article-detail.scss',
})
export class ArticleDetail implements OnInit {
  article: any = null;

  constructor(
    private route: ActivatedRoute,
    private apolloService: ApolloService,
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.apolloService.getArticleBySlug(slug).subscribe((article) => {
        this.article = article;
      });
    }
  }
}
