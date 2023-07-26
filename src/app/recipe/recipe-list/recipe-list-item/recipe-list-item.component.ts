import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeModel } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent {

  constructor(private recipeService: RecipeService) {}

  @Input() recipe!: RecipeModel;
  @Input() recipeItemID!: number;

}
