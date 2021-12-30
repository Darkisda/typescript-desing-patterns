import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export class MealBox implements MealCompositeProtocol {
  private readonly _children: MealCompositeProtocol[] = [];

  getPrice() {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  add(...meal: MealCompositeProtocol[]) {
    meal.forEach((item) => this._children.push(item));
  }
}
