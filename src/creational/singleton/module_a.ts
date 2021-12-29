import { MyDatabaseClassic } from './db/my-database-classic';
import { MyDatabaseModule } from './db/my-database-module';
import { MyDatabaseFunction } from './db/my-database-function';

// const db1 = MyDatabaseClassic.instance;
// const db1 = MyDatabaseModule;
const db1 = MyDatabaseFunction;

db1.add({ name: 'Luan', age: 21 });
db1.add({ name: 'João', age: 23 });
db1.add({ name: 'Maria', age: 19 });

export { db1 };
