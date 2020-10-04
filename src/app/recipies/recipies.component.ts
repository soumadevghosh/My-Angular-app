import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipemodel } from './recipemodel';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipeService]
})
export class RecipiesComponent implements OnInit {
  selectedRecipe: Recipemodel;
  constructor(public service: RecipeService) { }

  ngOnInit(): void {
    // this.service.recipeSelected.subscribe(recipe=>{
    //   this.selectedRecipe = recipe;
    // })
  }
  
  
}
