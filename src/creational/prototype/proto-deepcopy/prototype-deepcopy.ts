export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): Person {
    const newobj = new Person(this.name, this.age);
    newobj.addresses = this.addresses.map((item) => item.clone());
    return newobj;
  }

  addAddress(address: Address) {
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(public street: string, public num: number) {}

  clone(): Address {
    return new Address(this.street, this.num);
  }
}

const address1 = new Address('Av Brasil', 15);
const person1 = new Person('Luan', 22);
person1.addAddress(address1);
const person2 = person1.clone();

person1.addresses[0].street = 'bla bla bla';

person2.name = 'Person2';

console.log(person2);
console.log(person2.addresses);

console.log(person1);
console.log(person1.addresses);
