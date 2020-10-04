import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingrdientmodel } from 'src/app/shared/ingrdientmodel';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @Output() ingredientAdded = new EventEmitter<Ingrdientmodel>();
  @ViewChild('ingredientForm') formGroupDirective: FormGroupDirective;
   
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingrdientmodel;

  constructor(public formBuilder: FormBuilder, private service: ShoppingListService) { }
  addIngredientForm: FormGroup;
  ngOnInit(): void {
    this.addIngredientForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      amount: ['', [Validators.pattern(/^[1-9]+[0-9]*$/), Validators.required]]
    });

    this.service.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.service.getIngredient(index);
          this.addIngredientForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }
  onSubmit() {
    const name = this.addIngredientForm.controls.name.value;
    const amount = this.addIngredientForm.controls.amount.value;
    const newIngredient = new Ingrdientmodel(name, amount);
    // this.ingredientAdded.emit(newIngredient);
    if(this.editMode){
      this.service.updateIngredient(this.editedItemIndex,newIngredient);
    }
    else{
      this.service.addIngredient(newIngredient)
    }
    this.editMode = false;
    setTimeout(() => 
      this.formGroupDirective.resetForm(), 0)
  }

  onClear(){
    this.formGroupDirective.resetForm();
    this.editMode = false;
  }
  onDelete(){
    this.service.DeleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
}
