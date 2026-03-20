import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApolloService } from '../../services/apollo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  articles: any[] = [];

  constructor(private apolloService: ApolloService) {}

  ngOnInit() {
    this.apolloService.getArticles().subscribe((articles) => {
      this.articles = articles.slice(0, 5);
    });
  }
}
