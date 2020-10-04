
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingrdientmodel } from '../shared/ingrdientmodel';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipemodel } from './recipemodel';

@Injectable()
export class RecipeService {
    // recipeSelected = new Subject<Recipemodel>();

    constructor(private service: ShoppingListService){}

    private recipies: Recipemodel[] = [
        new Recipemodel('Biryani', 
        'recipe of best dish', 
        'https://c.ndtvimg.com/2019-06/s71ihu9_biryani_625x300_05_June_19.jpg',
        [new Ingrdientmodel('Chicken',500),new Ingrdientmodel('potatos',200)]),
        new Recipemodel('Chilli Chicken',
         'recipe of best chinese dish',
          'https://www.awesomecuisine.com/wp-content/uploads/2020/03/chilli-chicken.jpg',
          [new Ingrdientmodel('ginger',500),new Ingrdientmodel('capsicums',200),
        new Ingrdientmodel('chicken',1000)])
    ];

    getRecipies() {
        return this.recipies.slice(); //returns the copy
    }
    addIngredientsToShoppingList(ingredients: Ingrdientmodel[]){
        this.service.addIngredients(ingredients)
    }
    getRecipe(id: number){
        return this.recipies.slice()[id];
    }
}