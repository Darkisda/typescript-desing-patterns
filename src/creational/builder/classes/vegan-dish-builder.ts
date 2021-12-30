import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { Bean, Beverage, Dessert, Rice } from './meal';
import { MealBox } from './meal-box';

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Bean('Feijao', 7);

    this._meal.add(rice, beans);
    return this;
  }
  makeBaverage(): this {
    const bebida = new Beverage('Bebida', 7);

    this._meal.add(bebida);
    return this;
  }
  makeDessert(): this {
    const sobremesa = new Dessert('Sobremesa', 11);

    this._meal.add(sobremesa);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice() {
    return this._meal.getPrice();
  }
}
