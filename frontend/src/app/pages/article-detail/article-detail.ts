import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApolloService } from '../../services/apollo';

import { RichTextPipe } from '../../pipes/rich-text-pipe';
import { Button } from '../../components/button/button';

@Component({
  selector: 'app-article-detail',
  imports: [RouterLink, CommonModule, RichTextPipe, Button],
  templateUrl: './article-detail.html',
  styleUrl: './article-detail.scss',
})
export class ArticleDetail implements OnInit {
  article: any = null;

  constructor(
    private route: ActivatedRoute,
    private apolloService: ApolloService,
    private router: Router,
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.apolloService.getArticleBySlug(slug).subscribe((article) => {
        this.article = article;
      });
    }
  }
  goBack() {
    this.router.navigate(['/articles']);
  }
}
