import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApolloService {
  constructor(private apollo: Apollo) {}

  getArticles(): Observable<any[]> {
    return this.apollo
      .watchQuery({
        query: gql`
          query {
            articles {
              documentId
              titre
              extrait
              date
              slug
              category {
                nom
                slug
              }
            }
          }
        `,
      })
      .valueChanges.pipe(map((result: any) => result?.data?.articles ?? []));
  }

  getArticleBySlug(slug: string): Observable<any> {
    return this.apollo
      .watchQuery({
        query: gql`
          query GetArticle($slug: String!) {
            articles(filters: { slug: { eq: $slug } }) {
              documentId
              titre
              contenu
              extrait
              date
              slug
              category {
                nom
                slug
              }
              metaTitle
              metaDescription
            }
          }
        `,
        variables: { slug },
      })
      .valueChanges.pipe(map((result: any) => result?.data?.articles?.[0] ?? null));
  }

  getCategories(): Observable<any[]> {
    return this.apollo
      .watchQuery({
        query: gql`
          query {
            categories {
              documentId
              nom
              slug
            }
          }
        `,
      })
      .valueChanges.pipe(map((result: any) => result?.data?.categories ?? []));
  }

  getArticlesByCategory(slug: string): Observable<any[]> {
    return this.apollo
      .watchQuery({
        query: gql`
          query GetArticlesByCategory($slug: String!) {
            articles(filters: { category: { slug: { eq: $slug } } }) {
              documentId
              titre
              extrait
              date
              slug
              category {
                nom
                slug
              }
            }
          }
        `,
        variables: { slug },
      })
      .valueChanges.pipe(map((result: any) => result?.data?.articles ?? []));
  }
}
