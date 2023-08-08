import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.scss'],
  providers: [CategoryService, MovieService],
})
export class MovieCreateComponent implements OnInit {
  categories: Category[];
  constructor(
    private categoryService: CategoryService,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.GetCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  CreateMovie(
    movieName: any,
    movieDescription: any,
    movieImage: any,
    movieCategory: any
  ) {
    const movie = {
      id: 0,
      name: movieName.value,
      description: movieDescription.value,
      image: movieImage.value,
      categoryId: movieCategory.value,
      isPopular: false,
      datePublish: new Date()
    };

    this.movieService.CreateMovie(movie).subscribe((data) => {
      this.router.navigate(['movies']);
    });
  }
}
