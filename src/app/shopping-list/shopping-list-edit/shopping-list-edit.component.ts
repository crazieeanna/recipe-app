import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ShoppingListModel } from '../shopping-list.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {

  constructor(private shoppingListService: ShoppingListService) {}

  @ViewChild('nameInput', {static: false}) name!: ElementRef;
  @ViewChild('amountInput', {static: false}) amount!: ElementRef;

  onAddIngredient() {
    const name = this.name.nativeElement.value;
    const amount = this.amount.nativeElement.value;
    const addIngredient = new ShoppingListModel(name, amount);
    this.shoppingListService.addingInginShoppingList(addIngredient);
  }

}
