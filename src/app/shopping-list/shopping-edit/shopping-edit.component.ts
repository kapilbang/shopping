import { Component, OnInit,ViewChild,ElementRef,EventEmitter,Output } from '@angular/core';
import {Ingredient} from '../../shared/Ingredient.model';
import { ShoppingListService } from '../../services/shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  @ViewChild('inputName') nameOfIng : ElementRef;

  @ViewChild('amount') amountOfIg : ElementRef;

  //@Output() addedIng =  new EventEmitter<Ingredient>();

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {


  }


  addItem()
  {

      const name = this.nameOfIng.nativeElement.value;
      const amount = this.amountOfIg.nativeElement.value;
      const newIngredient =  new Ingredient(name,amount);
      this.shoppingListService.addNewIngredients(newIngredient);
  }

}
