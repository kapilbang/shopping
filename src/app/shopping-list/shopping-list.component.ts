import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/Ingredient.model';
import { ShoppingListService } from '../services/shoppinglist.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy{


  ingredientsSubscription:Subscription;

  ngOnDestroy(): void {
    this.ingredientsSubscription.unsubscribe();
  }

  ingredients : Ingredient[] = this.shoppingListService.getShoppingListData();

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {

    this.ingredientsSubscription = this.shoppingListService.sendUpdatedList.subscribe((updatedIngredients : Ingredient[]) => {this.ingredients= updatedIngredients});
  }

  //addedNewIngredient(ingredient : Ingredient){

   /// this.ingredients.push(ingredient);

  ///}

  updateIngredientsList()
  {
   // this.shoppingListService.sendUpdatedList.subscribe((updatedIngredients : Ingredient[]) => {this.ingredients= updatedIngredients});
  }

}
