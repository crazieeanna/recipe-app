import { Component, OnInit } from '@angular/core';
import { RecipeModel } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(private recipeService: RecipeService) {}

  onRecipeDetails!: RecipeModel;

  ngOnInit() {
    this.recipeService.recipeDetailOutOnItemClick.subscribe((recipe: RecipeModel) => {
      this.onRecipeDetails = recipe;
    });
  }


}
