//practice
const a: number = 20
const b: number = 30
console.log (a+b);

const numbers = [1, 2, 3];
for (const num of numbers) {
  console.log(num);
}
for (const num of numbers) {
  console.log(num);
}

//タプル型
type User = [string, number, boolean];
const user1: User = ["中山", 28, true];
const user2: User = ["原", 27, true];
console.log(user1[0]);
console.log(user1[1]);
console.log(user1[2]);

console.log(user2[0]);
console.log(user2[1]);
console.log(user2[2]);

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  introduce(): void{
    console.log(`My name is ${this.name}and I am ${this.age}years old.`);
  }

}
const akane = new Person("Akane",28);
akane.introduce();
