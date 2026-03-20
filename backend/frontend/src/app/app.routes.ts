import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Articles } from './pages/articles/articles';
import { ArticleDetail } from './pages/article-detail/article-detail';
import { Category } from './pages/category/category';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'articles', component: Articles },
  { path: 'articles/:slug', component: ArticleDetail },
  { path: 'category/:slug', component: Category },
];
