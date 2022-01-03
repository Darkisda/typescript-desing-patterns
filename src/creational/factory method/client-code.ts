import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { random } from './utils/random-numbers';

const customerNames = ['Ana', 'João', 'Pedro', 'Helena'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[random(customerNames.length)];

  vehicle.pickUp(name);
  vehicle.stop();
  console.log('---');
}
