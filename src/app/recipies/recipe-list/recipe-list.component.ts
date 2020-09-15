import { Component, OnInit } from '@angular/core';
import { Recipemodel } from '../recipemodel';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipemodel[] = [
    new Recipemodel('Biryani','recipe of best dish','https://c.ndtvimg.com/2019-06/s71ihu9_biryani_625x300_05_June_19.jpg'),
    new Recipemodel('Chilli Chicken','recipe of best chinese dish','https://www.awesomecuisine.com/wp-content/uploads/2020/03/chilli-chicken.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
