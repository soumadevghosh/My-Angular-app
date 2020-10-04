import { Subject } from 'rxjs';
import { Ingrdientmodel } from '../shared/ingrdientmodel';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingrdientmodel[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingrdientmodel[] = [
        new Ingrdientmodel('Onion', 100),
        new Ingrdientmodel('chicken', 10)
    ]

    getIngredients() {
        return this.ingredients;
    }
    getIngredient(index: number){
        return this.ingredients[index];
    }
    addIngredient(ingredient: Ingrdientmodel) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients: Ingrdientmodel[]) {
        // ingredient.forEach(element => {
        //     this.ingredients.push(element);
        // });

        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    updateIngredient(index: number, newIngredient: Ingrdientmodel)
    {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    DeleteIngredient(index: number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}