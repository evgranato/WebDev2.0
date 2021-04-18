// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container = document.querySelector("#container");

for (let i = 1; i < 100; i++) {
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");
  const newImg = document.createElement("img");
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container.appendChild(pokemon);
}
