import { Movie } from "../models/movie";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MovieService{

    url:string = "http://localhost:3000/movies";

    constructor(private http:HttpClient) {}

    GetMovies():Observable<Movie[]>{
        return this.http.get<Movie[]>(this.url);
    }    
}