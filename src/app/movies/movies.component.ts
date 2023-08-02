import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  moviesClone: Movie[];
  movieRepository: MovieRepository;
  filterText: string;
  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.moviesClone = this.movies;
  }

  ngOnInit(): void {}

  SearchMovies(text: string): Movie[] {
     this.moviesClone = text
      ? this.movies.filter(
          (m: Movie) => m.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
        )
      : this.movies;

    return this.moviesClone;
  }
}
