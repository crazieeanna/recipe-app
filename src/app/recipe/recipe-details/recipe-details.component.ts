import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(private recipeService: RecipeService, private  router: Router, private route: ActivatedRoute) {}

  recipeDetailsOutput!: RecipeModel
  recipeDetailsID!: number;

  ingOnShoppingList() {
    this.recipeService.addIngtoShoppingList(this.recipeDetailsOutput.ingredient);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipeDetailsID = +params['id'];
      this.recipeDetailsOutput = this.recipeService.getRecipeListByID(this.recipeDetailsID);
    });
  }

  onEditRecipe() {
    this.router.navigate(['../', this.recipeDetailsID, 'edit'], {relativeTo: this.route});
  }

}
