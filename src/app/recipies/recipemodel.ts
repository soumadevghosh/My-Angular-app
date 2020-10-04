import { Ingrdientmodel } from '../shared/ingrdientmodel';

export class Recipemodel {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingrdientmodel[];
    constructor(name: string, desc: string, imagePath: string, ingredients: Ingrdientmodel[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}
