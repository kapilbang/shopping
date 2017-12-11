import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { RecipeService } from "../../services/recipe.service";
import { Recipe } from "../recipe.model";
import {FormsModule} from "@angular/forms";


@Component({
    selector:'recepie-edit-app',
    templateUrl:'./recipe.edit.component.html',
    styleUrls:['./recipe.edit.componet.css']
})
export class RecepieEdit implements OnInit{

    name:string;
    isEditMode:boolean = false;

    recipeName : string;
    recipeDesc:string;
    recipePath:string;


    recipes: Recipe;

    ngOnInit(): void {
        this.actRoute.params.subscribe((data:Params) => {
            this.name=data['name'];
            this.isEditMode= this.name !=null;
            if(this.isEditMode)
            {
                const getRecepi = this.recepieService.getRecipe(this.name);
                this.recipeDesc = getRecepi.description;
                this.recipeName = getRecepi.name;
                this.recipePath = getRecepi.imagePath;
            }

        });
    }

    constructor(private recepieService:RecipeService,private route:Router,private actRoute:ActivatedRoute){

    }

    cancel()
    {

    }

    addData()
    {
        this.recipes=new Recipe(this.recipeName,this.recipeDesc,this.recipePath,[]);
        this.recepieService.addNewRecipe(this.recipes);
    }



}