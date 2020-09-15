import { Component, OnInit } from '@angular/core';
import { Ingrdientmodel } from '../shared/ingrdientmodel';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingrdientmodel[]=[
    new Ingrdientmodel('Onion',100),
    new Ingrdientmodel('chicken',10)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
