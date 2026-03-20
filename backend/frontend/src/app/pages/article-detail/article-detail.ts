import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
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
    private titleService: Title,
    private metaService: Meta,
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.apolloService.getArticleBySlug(slug).subscribe((article) => {
        this.article = article;
        if (article) {
          this.titleService.setTitle(article.metaTitle || article.titre);
          this.metaService.updateTag({
            name: 'description',
            content: article.metaDescription || article.extrait,
          });
        }
      });
    }
  }

  goBack() {
    this.router.navigate(['/articles']);
  }
}
