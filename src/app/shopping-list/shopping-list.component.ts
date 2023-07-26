import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingListModel } from './shopping-list.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  constructor(private shoppingListService: ShoppingListService) {}

  shoppingList: ShoppingListModel[] = [];
  subscription!: Subscription;

  ngOnInit() {
    this.shoppingList = this.shoppingListService.getShoppingList();
    this.subscription = this.shoppingListService.shoppingListIngredient.subscribe((ingredient: ShoppingListModel[]) => {
      this.shoppingList = ingredient;
    });
  }

  onClickingShopItem(shopItemIndex: number) {
    this.shoppingListService.loadShopListItemID.emit(shopItemIndex);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
