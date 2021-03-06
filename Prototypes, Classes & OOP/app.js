// String.prototype.yell = function () {
//   return `OMG!!! ${this.toUpperCase()}!!!! ARGHGHGH!`;
// };

// Array.prototype.pop = function () {
//   return "SORRY, I WANT THAT ELEMENT, I WILL NEVER POP IT OFF";
// };

// function hex(r, g, b) {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// function rgb(r, g, b) {
//   return `rgb${r}, ${g}, ${b}`;
// }

// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
//   };
//   color.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   return color;
// }

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }

// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b})`;
// };
// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };
// Color.prototype.rgba = function (a = 1.0) {
//   const { r, g, b } = this;
//   return `rgba(${r}, ${g}, ${b}, ${a})`;
// };

// const myColor = new Color(255, 40, 100);

//CLASS SYNTAX
// class Color {
//   constructor(r, g, b, name) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name;
//     this.calcHSL();
//   }
//   greet() {
//     return `HELLO FROM ${this.name.toUpperCase()}`;
//   }
//   innerRGB() {
//     const { r, g, b } = this;
//     return `${r}, ${g}, ${b}`;
//   }
//   rgb() {
//     const { r, g, b } = this;
//     return `rgb(${this.innerRGB()})`;
//   }
//   hex() {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }
//   rgba(a = 1) {
//     return `rgba(${this.innerRGB()}, ${a})`;
//   }
//   hsl() {
//     const { h, s, l } = this;
//     return `hsl(${h}, ${s}%, ${l}%)`;
//   }
//   fullSaturation() {
//     const { h, s, l } = this;
//     return `hsl(${h}, ${100}%, ${l}%)`;
//   }
//   opposite() {
//     const { h, s, l } = this;
//     const newHue = (h + 180) % 360;
//     return `hsl(${newHue}, ${s}%, ${l}%)`;
//   }
//   calcHSL() {
//     let { r, g, b } = this;
//     // Make r, g and b fractions of 1
//     r /= 255;
//     g /= 255;
//     b /= 255;

//     // Find greatest and smallest channel values
//     let cmin = Math.min(r, g, b),
//       cmax = Math.max(r, g, b),
//       delta = cmax - cmin,
//       h = 0,
//       s = 0,
//       l = 0;
//     if (delta == 0) h = 0;
//     else if (cmax == r)
//       // Red is max
//       h = ((g - b) / delta) % 6;
//     else if (cmax == g)
//       // Green is max
//       h = (b - r) / delta + 2;
//     // Blue is max
//     else h = (r - g) / delta + 4;

//     h = Math.round(h * 60);

//     // Make negative hues positive behind 360º
//     if (h < 0) h += 360;

//     // Calculate lightness
//     l = (cmax + cmin) / 2;

//     // Calculate saturation
//     s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

//     //Multiply l and s by 100
//     s = +(s * 100).toFixed(1);
//     l = +(l * 100).toFixed(1);
//     this.h = h;
//     this.s = s;
//     this.l = l;
//   }
// }

// const red = new Color(255, 67, 89, "tomato");
// const white = new Color(255, 255, 255, "white");

// HSL CLASS

// EXTENDS AND SUPER KEYWORDS:

class Pet {
  constructor(name, age) {
    this.name = name[0].toUpperCase() + name.substring(1);
    this.age = age;
  }
  eat() {
    return `${this.name} is eating.`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return "MEOWWW!";
  }
  lifeLost() {
    this.livesLeft -= 1;
  }
}

class Dog extends Pet {
  bark() {
    return "WOOOF!";
  }
}
// const allPet = [];

// const form = document.querySelector("#petForm");
// const Type = document.querySelector("#petType");
// const Name = document.querySelector("#petName");
// const Age = document.querySelector("#petAge");

// form.addEventListener("submit", function (e) {
//   const form = document.querySelector("#petForm");
//   const petType = form.elements.petType;
//   const petName = form.elements.petName;
//   const petAge = form.elements.petAge;
//   let allPet0 = [petType.value, petName.value, parseInt(petAge.value)];
//   let allPet1 = ["Dog", "jack", 10];
//   console.log(allPet1);
//   allPet.push(allPet1);
//   constructIt(allPet);
//   // const newPet = new petType.value(petName.value, petAge.value);
// });

// function constructIt(test) {
//   const newestPet = new Dog(test[1], test[2]);
//   return newestPet;
// }
