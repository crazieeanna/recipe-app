import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ShoppingListModel } from '../shopping-list.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) {}

  editMode = false;
  editIngNumber!: number;
  editIng!: ShoppingListModel;
  subscription!: Subscription;

  @ViewChild('shoppingListEditForm', {static: false}) editForm!: NgForm

  ngOnInit() {
    this.shoppingListService.loadShopListItemID.subscribe((id: number) => {
      this.editIngNumber = id;
      this.editMode = true;
      this.editIng = this.shoppingListService.getShoppingListByID(this.editIngNumber);
      this.editForm.form.setValue({
        name: this.editIng.name,
        amount: this.editIng.amount
      })
    });
  }

  onAddIngredient(shoppingForm: NgForm) {
    const name = shoppingForm.value.name;
    const amount = shoppingForm.value.amount;
    const addIngredient = new ShoppingListModel(name, amount);
    if(this.editMode === true) {
      this.shoppingListService.updatingInginShoppingList(this.editIngNumber, addIngredient);
    } else {
      this.shoppingListService.addingInginShoppingList(addIngredient);
    }
    this.editMode = false;
    this.editForm.reset();
  }

  onClearIngredient() {
    this.editMode = false;
    this.editForm.reset();
  }

  onDeleteIngredient() {
    this.shoppingListService.deletingInginShoppingList(this.editIngNumber);
    this.editMode = false;
    this.editForm.reset();
  }


}
