import { CarFactory } from '../factories/car-factory';
import { random } from '../utils/random-numbers';
import { Vehicle } from '../vehicle/vehicle';

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();

  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta');
  const bicycle = carFactory.getVehicle('Bicicleta');

  const cars = [car1, car2, bicycle];

  return cars[random(cars.length)];
}
