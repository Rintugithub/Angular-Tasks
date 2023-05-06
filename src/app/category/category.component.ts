import { Component } from '@angular/core';

interface SubCategory {
  label: string;
  role: string;
}

interface Category {
  category: string;
  subCategory: SubCategory[];
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories: Category[] = [
    {
      category: 'Dashboard',
      subCategory: [
        { label: 'SOP', role: 'SOP_A_VIEW' },
        { label: 'SOP-V2', role: 'SOP_A_V2' },
        { label: 'QSOP', role: 'QSOP_V_VIEW' }
      ]
    },
    {
      category: 'User',
      subCategory: [
        { label: 'Add User', role: 'USR_M_ADD' },
        { label: 'Edit User', role: 'USR_M_ADD' },
        { label: 'Delete User', role: 'USR_D' }
      ]
    },
    {
      category: 'Master',
      subCategory: [
        { label: 'Shift Master', role: 'SHIFT_M_ADD' },
        { label: 'Machine', role: 'MACHN_M_VIEW' },
        { label: 'Component Master', role: 'COMP_M_VIEW' }
      ]
    },
    {
      category: 'Test',
      subCategory: [
        { label: 'Test', role: 'TEST_M_ADD' }
      ]
    }
  ];

  allowedRoles: string[] = ['SOP_A_VIEW', 'COMP_M_VIEW', 'TEST_M_ADD', 'QSOP_V_VIEW'];

  selectedCategory: Category | null = null;

  getFilteredSubCategories(): SubCategory[] {
    if (!this.selectedCategory) {
      return [];
    }
    return this.selectedCategory.subCategory.filter(subCat => this.allowedRoles.includes(subCat.role));
  }

  onSelectCategory(category: Category): void {
    this.selectedCategory = category;
  }


}
