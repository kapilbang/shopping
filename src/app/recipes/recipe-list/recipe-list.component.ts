import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = this.recipeService.getRecipeData();

  //@Output() receipDetail = new EventEmitter<Recipe>();


  constructor(private recipeService :RecipeService,private route:Router,private actRoute:ActivatedRoute) {
    
   }

  ngOnInit() {
  }

  addNewRecipe()
  {
      this.route.navigate(['recipe/new']); 
  }


  //showSelected(selected:Recipe)
  //{
   //   this.receipDetail.emit(selected);
  //}

  
}
