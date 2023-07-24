import { Component } from '@angular/core';
import { ShoppingListModel } from './shopping-list.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  shoppingList: ShoppingListModel[] = [
    new ShoppingListModel('Potato', 10),
    new ShoppingListModel('Tomato', 15),
    new ShoppingListModel('Milk', 20)
  ];

  addingInginShoppingList(shoppingListIngAdd: ShoppingListModel) {
    this.shoppingList.push(shoppingListIngAdd);
  }

}
