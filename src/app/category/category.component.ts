import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  AllFilms: boolean = true;
  displayAll: boolean = true;
  selectedCategory: Category;


  constructor(private categoryService:CategoryService) {
    this.categoryService.GetCategories().subscribe((data) => {
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
