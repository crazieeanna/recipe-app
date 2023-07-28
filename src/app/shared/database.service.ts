import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { RecipeModel } from '../recipe/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  saveData() {
    const recipeData = this.recipeService.getRecipeList();
    this.http.put('https://recipe-book-database-d7fbe-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json', recipeData).subscribe((saveResponse) => {
      console.log(saveResponse);
    });
  }

  fetchData() {
    this.http.get<RecipeModel[]>('https://recipe-book-database-d7fbe-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json').subscribe((fetchResponse) => {
      this.recipeService.getRecipeForBackEnd(fetchResponse);
    })
  }
}
