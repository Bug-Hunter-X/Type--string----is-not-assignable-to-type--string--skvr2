function greeter(person: string): string {
  return `Hello, ${person}!`;
}

let user = "Jane Doe";
console.log(greeter(user)); //Correct

//Alternative solution: Modify the function to accept a string array
function greeterArray(persons: string[]): string {
  return `Hello, ${persons.join(', ')}!`;
}

let users = ["Jane Doe", "John Smith"];
console.log(greeterArray(users)); //Correct