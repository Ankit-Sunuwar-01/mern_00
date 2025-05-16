class Student {
  name;
  email;
  #phone;
  address;
  group;

  static role = "student";

  constructor(name, email, phone, address, group) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.group = group;
    this.#phone = phone; // private property lai # garni.
  }

  setPhone(phone) {
    this.#phone = phone;
  }
  getPhone() {
    return this.#phone;
  }
}

const std = new Student(
  "Ankit",
  "ankitsunuwar181@gmail.com",
  9818881185,
  "Kathmandu",
  "Mern_00"
);

// std.name = "Ankit";
// std.email = "ankitsunuwar171@gmail.com";
// std.address = "Kathmandu";
// std.group = "Mern_00";

console.log(std.getPhone());
console.log(std);
console.log(Student.role);

// Create a class called Animal
// Assign name and sound to the class using construction.
// Create a funciton within same class to print what animal does  make what sound
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} makes '${this.sound}' sound.`);
  }
}

const dog = new Animal("Dog", "woof");
const cat = new Animal("Cat", "meow");

dog.makeSound(); // Dog makes 'woof' sound.
cat.makeSound(); // Cat makes 'meow' sound.

// Create a class called student
// assign name, score address as properties using constructior
// assign percentage and division as provate property.
// Using function wthin class, get and populate percentage and division4
// by create a funciton to display the student's performance using the object within the class
