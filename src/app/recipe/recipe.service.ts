import { EventEmitter, Injectable } from "@angular/core";
import { RecipeModel } from "./recipe.model";
import { ShoppingListModel } from "../shopping-list/shopping-list.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({providedIn: 'root'})
export class RecipeService {

    constructor(private shoppingListService: ShoppingListService) {}

    recipeDetailOutOnItemClick = new EventEmitter<RecipeModel>();
    recipeEditEvent = new EventEmitter<RecipeModel[]>();

    private recipeList: RecipeModel[] = [
        new RecipeModel('Dosa', 'Mysore Masala Buteer Dosa', 'https://i.pinimg.com/564x/1c/53/e3/1c53e3c86903a834c1902ab4e6ad5dd4--mysore-coconut-chutney.jpg', [new ShoppingListModel('Potato', 15)]),
        new RecipeModel('Coffee', 'Filter Coffee', 'https://www.vegrecipesofindia.com/wp-content/uploads/2016/09/filter-coffee-recipe-1.jpg', [new ShoppingListModel('Tomato', 10)]),
        new RecipeModel('Baje', 'Goli Baje', 'https://www.vegrecipesofindia.com/wp-content/uploads/2017/07/goli-baje-recipe-1a.jpg', [new ShoppingListModel('Milk', 5)])
    ];

    getRecipeList() {
        return this.recipeList.slice();
    }

    addIngtoShoppingList(ing: ShoppingListModel[]) {
        this.shoppingListService.getShoppingIng(ing);
    }

    getRecipeListByID(index: number) {
        return this.recipeList.slice()[index];
    }

    updateRecipeItem(index: number, newRecipe: RecipeModel) {
        this.recipeList[index] = newRecipe;
        this.recipeEditEvent.emit(this.recipeList.slice());
    }

    addNewRecipeToList(recipe: RecipeModel) {
        this.recipeList.push(recipe);
        this.recipeEditEvent.emit(this.recipeList.slice());
    }

    onDeleteRecipe(index: number) {
        this.recipeList.splice(index, 1);
        this.recipeEditEvent.emit(this.recipeList.slice());
    }

}