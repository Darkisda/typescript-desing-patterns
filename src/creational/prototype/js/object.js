const person = {
  firstName: 'Luan',
  lastName: 'Souza',
  age: 22,

  fullName() {
    return `${this.firstName} + ${this.lastName}`;
  },
};

const anotherPerson = Object.create(person);
anotherPerson.firstName = 'Lauro';
console.log(anotherPerson);
