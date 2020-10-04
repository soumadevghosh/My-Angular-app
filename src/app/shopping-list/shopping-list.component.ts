import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingrdientmodel } from '../shared/ingrdientmodel';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  // providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingrdientmodel[];
  private ingredientChange: Subscription;

  constructor(private service: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.service.getIngredients();
    this.ingredientChange = this.service.ingredientsChanged
      .subscribe((ingredients: Ingrdientmodel[]) => {
        this.ingredients = ingredients
      });

  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.ingredientChange.unsubscribe();
  }

  // onIngredientAdded(ingredient: Ingrdientmodel) {
  //   this.ingredients.push(ingredient)
  // }
  onEditItem(index: number){
    this.service.startedEditing.next(index);
  }
}
