
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Injectable()
export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe('Maggi','Maggi',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf148EuQqC90pqKVJvjraTejon1-A5OKkMuwsnBfxRDlWq1foe',
        [new Ingredient("bfjdgjkds",1321),new Ingredient("bfjdgjkds",1321),new Ingredient("bfjdgjkds",1321)]),
        new Recipe('Poha','Poha',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf148EuQqC90pqKVJvjraTejon1-A5OKkMuwsnBfxRDlWq1foe',
        [new Ingredient("bfjdgjkds",1321),new Ingredient("bfjdgjkds",1321),new Ingredient("bfjdgjkds",1321)]),
      ];

      getRecipeData()
      {
          return this.recipes.slice();
      }

      constructor(private shoppingListService:ShoppingListService)
      {

      }

      selectedReceipe = new EventEmitter<Recipe>();


      addIngredientToShoppingList(ingredient:Ingredient[])
      {
            this.shoppingListService.addNewIngredientsList(ingredient);
      }


      getRecipe(name: string) {
        const recipe = this.recipes.find(
          (s) => {
            return s.name === name;
          }
        );
        return recipe;
      }

      addNewRecipe(recipe: Recipe)
      {
            this.recipes.push(recipe);
      }




}