import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeModel } from '../../recipe.model';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent {

  @Input() recipe!: RecipeModel;
  @Output() recipeClick = new EventEmitter<void>();

  onRecipeClick() {
    this.recipeClick.emit();
  }

}
