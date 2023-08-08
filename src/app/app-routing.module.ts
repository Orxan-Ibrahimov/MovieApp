import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';

const routes: Routes = [
  {path:'movies', component:MoviesComponent},
  {path:'', redirectTo:'movies', pathMatch:'full'},
  {path:'movies/movie/create', component:MovieCreateComponent},
  {path:'movies/category/:categoryId', component:MoviesComponent},
  {path:'movies/movie/:movieId', component:MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
