import { Movie } from "../models/movie";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MovieService{

    url:string = "http://localhost:3000/movies";

    constructor(private http:HttpClient) {}

    GetMovies(categoryId:number):Observable<Movie[]>{

        let newUrl = this.url;

        if(categoryId)
        newUrl += "?categoryId=" + categoryId;

        return this.http.get<Movie[]>(newUrl);
    }    
}