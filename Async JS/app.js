const h1 = document.createElement("h1");

const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};

const answer = isRightTriangle(2, 3, 4);

h1.append(answer);
document.body.appendChild(h1);
