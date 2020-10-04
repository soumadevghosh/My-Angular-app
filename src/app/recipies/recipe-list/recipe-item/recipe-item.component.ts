import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Recipemodel } from '../../recipemodel';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : Recipemodel

  @Input() id: number;
  // @Output() recipeSelected = new EventEmitter<void>()  //listened by recipe-list component
 
  constructor(private service: RecipeService) { }

  ngOnInit(): void {
  }
  // onSelected(){
  //   // this.recipeSelected.emit();
  //   this.service.recipeSelected.emit(this.recipe);
  // }
}
