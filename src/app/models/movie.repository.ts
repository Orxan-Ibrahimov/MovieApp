import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];

  constructor() {
  
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  getPopularMovies(): Movie[] {
    return this.movies.filter((m) => m.isPopular);
  }

  getMovieById(id: number): Movie {
    let movie = this.movies.find((i) => i.id == id);
    return movie;
  }
}
