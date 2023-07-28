import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {}

  recipeList: RecipeModel[] = [];

  ngOnInit() {
    this.recipeList = this.recipeService.getRecipeList();
    this.recipeService.recipeEditEvent.subscribe(
      (recipe: RecipeModel[]) => {
        this.recipeList = recipe;
      }
    );
  }

  clickToNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
