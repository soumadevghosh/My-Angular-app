import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipemodel } from '../recipemodel';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeChosen = new EventEmitter<Recipemodel>(); //listened by recipies component

  recipies: Recipemodel[] = [];


  constructor(private service: RecipeService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipies = this.service.getRecipies();
  }
  // onRecipeSelected(recipe : Recipemodel){
  //   this.recipeChosen.emit(recipe);
  // }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route})
  }
}
