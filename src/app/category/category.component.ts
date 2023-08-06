import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  AllFilms: boolean = true;
  displayAll: boolean = true;
  selectedCategory: Category;


  constructor(http:HttpClient) {
    http.get<Category[]>("http://localhost:3000/categories").subscribe((data) => {
      this.categories = data;
    });
  }


  ngOnInit(): void {

  }

  ChoseCategory(category?: Category) {
    if (category) {
      this.selectedCategory = category;
      this.displayAll = false;
    } else {
      this.selectedCategory = null;
      this.displayAll = true;
    }
  }
}
