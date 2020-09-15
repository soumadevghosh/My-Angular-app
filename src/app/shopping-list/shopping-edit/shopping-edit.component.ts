import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(public formBuilder: FormBuilder) { }
  addIngredientForm = this.formBuilder.group({
    name: [],
    amount: []
  });
  ngOnInit(): void {
  }

}
