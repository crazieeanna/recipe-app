import { EventEmitter, Injectable } from "@angular/core";
import { ShoppingListModel } from "./shopping-list.model";

@Injectable({providedIn: 'root'})
export class ShoppingListService {

    shoppingListIngredient =  new EventEmitter<ShoppingListModel[]>();

    private shoppingList: ShoppingListModel[] = [
        new ShoppingListModel('Potato', 10),
        new ShoppingListModel('Tomato', 15),
        new ShoppingListModel('Milk', 20)
    ];

    getShoppingList() {
        return this.shoppingList.slice();
    }

    addingInginShoppingList(shoppingListIngAdd: ShoppingListModel) {
        this.shoppingList.push(shoppingListIngAdd);
        this.shoppingListIngredient.emit(this.shoppingList.slice());
    }

    getShoppingIng(ing: ShoppingListModel[]) {
        this.shoppingList.push(...ing);
        this.shoppingListIngredient.emit(this.shoppingList.slice());
    }
} 