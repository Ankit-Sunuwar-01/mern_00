class Sound {
  name;
  sound;
  #tag;

  construction(name, sound, tag) {
    this.name = name;
    this.sound = sound;
    this.#tag = tag;
  }

  makeSound = () => {
    console.log(`${this.name}, ${this.#tag} makes ${this.sound} sound`);
  };
  getTag() {
    return this.#tag;
  }
}

// Child or Derived
class Animal extends Sound {}

class Baby extends Sound {
  activity;
  // overriding
  constructor(name, activity, sound) {
    super(name, sound, ""); //super constructor
    this.activity = activity;
  }
  getTag() {
    console.log("Value of tag:", super.getTag());
  }

  makeSound = () => {
    console.log(`${this.name}, ${this.activity} makes ${this.sound} sound`);
  };
}

const dog = new Animal("Dog", "woof", "#goodDog");
dog.makeSound();

const child = new Babt("Alica", "");
