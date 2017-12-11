import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../services/recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private recipeService:RecipeService ) { }

  recipe: Recipe;

  ngOnInit() {

    this.recipeService.selectedReceipe.subscribe((data:Recipe) => {this.recipe = data});
  }


  //newSelectedRecipe(selectedOne:Recipe)
  //{
  // this.recipe = selectedOne;
  //}
}
