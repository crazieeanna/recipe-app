import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  editMode = false;
  recipeEditID!: number;
  recipeEditDetails!: RecipeModel;
  recipeEditForm!: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private recipeService: RecipeService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipeEditID = +params['id'];
      if(params['id']) {     // this.editMode = params['id'] != null;
        this.editMode = true;
        this.recipeEdit();
      } else {
        this.editMode = false;
        this.recipeEdit();
      }
      console.log(this.editMode);
    });
  }

  private recipeEdit() {
    let recipeName = '';
    let recipeImage = '';
    let recipeDescription = '';

    if(this.editMode === true) {
      const recipeListDetail = this.recipeService.getRecipeListByID(this.recipeEditID);
      recipeName = recipeListDetail.name;
      recipeImage = recipeListDetail.imagePath;
      recipeDescription = recipeListDetail.description;
    }

    this.recipeEditForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'image': new FormControl(recipeImage, Validators.required),
    })
  }

  onSubmit() {
    const newRecipeAdd = new RecipeModel(
      this.recipeEditForm.value['name'],
      this.recipeEditForm.value['description'],
      this.recipeEditForm.value['image'],
      this.recipeEditForm.value['ingredients']
    );
    if(this.editMode === true) {
      this.recipeService.updateRecipeItem(this.recipeEditID, newRecipeAdd);
    } else {
      this.recipeService.addNewRecipeToList(newRecipeAdd);
    }
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onCancelRecipeEdit() {
    this.editMode = false;
    this.recipeEditForm.reset();
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
