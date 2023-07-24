import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ShoppingListModel } from '../shopping-list.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {

  @Output() shoppingListAdd = new EventEmitter<ShoppingListModel>();
  @ViewChild('nameInput', {static: false}) name!: ElementRef;
  @ViewChild('amountInput', {static: false}) amount!: ElementRef;

  onAddIngredient() {
    const name = this.name.nativeElement.value;
    const amount = this.amount.nativeElement.value;
    const addIngredient = new ShoppingListModel(name, amount);
    this.shoppingListAdd.emit(addIngredient);
  }

}
