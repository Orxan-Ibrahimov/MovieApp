import { Category } from './category';

export class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [
      {
        id: 1,
        category: 'Dram',
      },
      {
        id: 2,
        category: 'Romantic',
      },
      {
        id: 3,
        category: 'Fantastic',
      },
      {
        id: 4,
        category: 'Animation',
      },
    ];
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getCategoryById(id: number): Category {
    return this.categories.find((c) => c.id == id);
  }
}
