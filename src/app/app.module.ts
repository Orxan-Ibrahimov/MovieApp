import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { MovieFilterPipe } from './pipes/movie-filter.pipe';
import { FormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify.service';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    SummaryPipe,
    MovieFilterPipe,
    MovieDetailComponent,
    MovieCreateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // RouterModule
  ],
  providers: [
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
