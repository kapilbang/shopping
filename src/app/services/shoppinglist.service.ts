import { Ingredient } from "../shared/Ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";

export class ShoppingListService{
    private ingredients : Ingredient[] = [
        new Ingredient('A',12),
        new Ingredient('B',456)
      ];

      //sendUpdatedList = new EventEmitter<Ingredient[]>();

      sendUpdatedList = new Subject<Ingredient[]>();


      getShoppingListData(){
          return this.ingredients.slice();
      }


      addNewIngredients(ingredient:Ingredient)
      {
          this.ingredients.push(ingredient);

          this.sendUpdatedList.next(this.ingredients);
      }

      addNewIngredientsList(ingredient:Ingredient[])
      {
          this.ingredients.push(...ingredient);

          this.sendUpdatedList.next(this.ingredients);
      }
}