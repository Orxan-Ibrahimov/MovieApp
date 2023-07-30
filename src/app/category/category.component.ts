import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories:Category[] = [
    {
      id:1,
      category:"Dram"
    },
    {
      id:2,
      category:"Romantic"
    },
    {
      id:3,
      category:"Fantastic"
    },
  ]

}
