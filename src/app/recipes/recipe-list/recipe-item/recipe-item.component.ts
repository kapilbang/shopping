import { Component, OnInit ,Input,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../../recipe.model'
import { RecipeService } from '../../../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {


  @Input() resp = new EventEmitter<Recipe>();

  //@Output() selectedReceip = new EventEmitter<void>();

  constructor(private recipeService :RecipeService,private route :Router,private actRoute:ActivatedRoute) {
    
   }

  ngOnInit() {
  }


  onReceipeSelect123(){
    //  this.selectedReceip.emit();
  }


  onReceipeSelect(selectedData : Recipe){
    //this.recipeService.selectedReceipe.emit(selectedData);
    this.route.navigate(['recipe/recipeDetail',selectedData.name]);
}




}
