import { ShoppingListModel } from "../shopping-list/shopping-list.model";

export class RecipeModel {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredient: ShoppingListModel[];

    constructor(name: string, desc: string, imgPath: string, ing: ShoppingListModel[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imgPath;
        this.ingredient = ing;
    }
}