import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';

declare let alertify:any;
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

  AddToList(event: any) {
    if(event.target.classList.contains("btn-primary")){
      event.target.classList.remove("btn-primary");
      event.target.classList.add("btn-danger");
      event.target.innerText = "Remove from list";

      alertify.success('Movie was added to list!');
    }
    else{
      event.target.classList.remove("btn-danger");
      event.target.classList.add("btn-primary");
      event.target.innerText = "Add to list"; 

      alertify.error('Movie was removed from list!');
    }
  }


}
