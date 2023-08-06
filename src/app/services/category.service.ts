import { HttpClient } from "@angular/common/http";
import { Category } from "../models/category";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class CategoryService{

    url = "http://localhost:3000/categories";

    constructor(private http:HttpClient){}

    GetCategories():Observable<Category[]>{
        return this.http.get<Category[]>(this.url);
    }
}