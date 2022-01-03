export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): this {
    const newobj = Object.create(this);
    return newobj;
  }

  addAddress(address: Address) {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(public street: string, public num: number) {}
}

const address1 = new Address('Av Brasil', 15);
const person1 = new Person('Luan', 22);
person1.addAddress(address1);
const person2 = person1.clone();

person1.addresses[0].street = 'bla bla bla';

person2.name = 'Person2';

console.log(person2);
console.log(person2.addresses);
