import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { PageNotFound } from "./PageNotFound/pageNotFound.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe.start.componet";
import { RecepieEdit } from "./recipes/recipe-edit/recipe.edit.component";
import { UserListComponent } from "./user-list-componet/user.list.componet";


const route:Routes = [

    {path:"",redirectTo:"/recipe",pathMatch:"full"},
    
    {path:"recipe",component:RecipesComponent,
        children:[ 
                    {path:"",component:RecipeStartComponent,pathMatch:"full"},
                    {path:"new",component:RecepieEdit},
                    {path:":name/edit",component:RecepieEdit},
                    {path:"recipeDetail/:name",component:RecipeDetailComponent},
                ]
    },
    {path:"shopping",component:ShoppingListComponent},
    {path:"userlist",component:UserListComponent},
    {path:"pageNotFound",component:PageNotFound},
    {path:"**",redirectTo:"/pageNotFound",pathMatch:"full"},
    

];

@NgModule({
    imports:[
        RouterModule.forRoot(route)
    ],
    exports:[
        RouterModule
    ]
})
export class RouteModel{

}