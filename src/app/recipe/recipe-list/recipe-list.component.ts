import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() clickedRecipe = new EventEmitter<RecipeModel>();

  recipeList: RecipeModel[] = [
    new RecipeModel('Dosa', 'Mysore Masala Buteer Dosa', 'https://i.pinimg.com/564x/1c/53/e3/1c53e3c86903a834c1902ab4e6ad5dd4--mysore-coconut-chutney.jpg'),
    new RecipeModel('Coffee', 'Filter Coffee', 'https://www.vegrecipesofindia.com/wp-content/uploads/2016/09/filter-coffee-recipe-1.jpg'),
    new RecipeModel('Baje', 'Goli Baje', 'https://www.vegrecipesofindia.com/wp-content/uploads/2017/07/goli-baje-recipe-1a.jpg')
  ];

  onClickedRecipe(recipeList: RecipeModel) {
    this.clickedRecipe.emit(recipeList);
  }

}
