import { Component, OnInit,EventEmitter,Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';

import { Ingredient } from "../../shared/Ingredient.model";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private recipeService:RecipeService,private route :Router,private actRoute:ActivatedRoute) { }

  respToShow : Recipe;

  ngOnInit() {

    this.actRoute.params.subscribe((data:Params) => {
        this.respToShow = this.recipeService.getRecipe(data['name']);
    } );

   // this.recipeService.selectedReceipe.subscribe((data:Recipe) => (this.respToShow = data) );
  }

  addRecipeToShoppingList()
  {
    this.recipeService.addIngredientToShoppingList(this.respToShow.ingredient);
  }

  editTheRecpie()
  {
    this.route.navigate(['/recipe',this.respToShow.name,'edit']);
  }

}
