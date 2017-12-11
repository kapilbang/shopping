import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './headerComponent/app.header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropDownDir } from './Dir/DropDownDir';
import { ShoppingListService } from './services/shoppinglist.service';
import { RouteModel } from './routing.module';
import { PageNotFound } from './PageNotFound/pageNotFound.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe.start.componet';
import { RecepieEdit } from './recipes/recipe-edit/recipe.edit.component';
import { RecipeService } from './services/recipe.service';
import { UserListComponent } from './user-list-componet/user.list.componet';
import { UserService } from './services/user.service';
import { TrueFalsePipe } from './user.value.pipe';
 
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    UserListComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    PageNotFound,
    RecipeStartComponent,
    RecepieEdit,
    DropDownDir,
    TrueFalsePipe
   
  ],
  imports: [
    BrowserModule,
    RouteModel,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ShoppingListService,RecipeService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
