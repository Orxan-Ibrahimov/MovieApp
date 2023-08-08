import { Movie } from '../models/movie';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Injectable()
export class MovieService {
  url: string = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {}

  GetMovies(categoryId: number): Observable<Movie[]> {
    let newUrl = this.url;

    if (categoryId) newUrl += '?categoryId=' + categoryId;

    return this.http.get<Movie[]>(newUrl);
  }

  GetMovieById(movieId: number): Observable<Movie> {
    let newUrl = this.url;

    if (movieId) newUrl += '/' + movieId;
    // if (movieId) newUrl += '?id=' + movieId; // return array and because of this data is undefinied

    return this.http.get<Movie>(newUrl);
  }

  CreateMovie(movie: Movie): Observable<Movie> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token',
      }),
    };

    return this.http.post<Movie>(this.url, movie, options);
  }
}
