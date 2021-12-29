import { MyDatabaseClassic } from './db/my-database-classic';
import { MyDatabaseFunction } from './db/my-database-function';
import { MyDatabaseModule } from './db/my-database-module';
import { db1 as singletonDb1 } from './module_a';

// const db1 = MyDatabaseClassic.instance;
// const db1 = MyDatabaseModule;
const db1 = MyDatabaseFunction;

db1.add({ name: 'Roberto', age: 21 });
db1.add({ name: 'Joana', age: 23 });
db1.add({ name: 'Luiza', age: 19 });
db1.show();

console.log(db1 === singletonDb1);
