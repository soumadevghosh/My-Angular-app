import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipemodel } from '../recipemodel';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipemodel
  recipe: Recipemodel
  constructor(private service: RecipeService, private route: ActivatedRoute, private router: Router) { }
  id: number;
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.recipe = this.service.getRecipe(this.id);
      }
    );
  }
  onAddToShoppingList(){
    this.service.addIngredientsToShoppingList(this.recipe.ingredients)
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo: this.route});  //current path has id so just using it and adding edit
    // this.router.navigate(['../', this.id,'edit'],{relativeTo: this.route}); //going up one level then add id/edit
  }

}
