import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  providers: [MovieService]
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;

  constructor(private movieService: MovieService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.movieService.GetMovieById(params['movieId']).subscribe((data) => {
        this.movie = data;
        console.log(data);        
      });
    });
  }

}
