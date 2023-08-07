import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';
import { AlertifyService } from '../services/alertify.service';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers:[MovieService]
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  moviesClone: Movie[];
  filterText: string;
  constructor(private alertifyService: AlertifyService, 
    private movieService:MovieService,
    private activatedRoute:ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.movieService.GetMovies(params['categoryId']).subscribe((data) => {
        this.movies = data;
        this.moviesClone = this.movies;
      })
    });
  }

  SearchMovies(text: string): Movie[] {
    this.moviesClone = text
      ? this.movies.filter(
          (m: Movie) => m.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
        )
      : this.movies;

    return this.moviesClone;
  }

  AddToList(event: any, movie: Movie) {
    if (event.target.classList.contains('btn-primary')) {
      event.target.classList.remove('btn-primary');
      event.target.classList.add('btn-danger');
      event.target.innerText = 'Remove from list';

      this.alertifyService.success(movie.name + ' was added to list!');
    } else {
      event.target.classList.remove('btn-danger');
      event.target.classList.add('btn-primary');
      event.target.innerText = 'Add to list';

      this.alertifyService.danger(movie.name + ' was removed from list!');
    }
  }
}
