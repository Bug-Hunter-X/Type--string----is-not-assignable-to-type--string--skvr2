function greeter(person: string): string {
  return `Hello, ${person}!`;
}

let user = ["Jane Doe", 123];
console.log(greeter(user)); //Error TS2345: Argument of type 'string[]' is not assignable to parameter of type 'string'.