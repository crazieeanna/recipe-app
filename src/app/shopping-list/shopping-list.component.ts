import { Component, OnInit } from '@angular/core';
import { ShoppingListModel } from './shopping-list.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) {}

  shoppingList: ShoppingListModel[] = [];

  ngOnInit() {
    this.shoppingList = this.shoppingListService.getShoppingList();
    this.shoppingListService.shoppingListIngredient.subscribe((ingredient: ShoppingListModel[]) => {
      this.shoppingList = ingredient;
    });
  }

}
