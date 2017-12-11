import { Ingredient } from "../shared/Ingredient.model";

export class Recipe{
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredient:Ingredient[];
    constructor(name:string,desc:string,imagePath:string,ingredientGet:Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredient = ingredientGet;
    }
    
}