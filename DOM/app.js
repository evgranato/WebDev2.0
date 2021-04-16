// const allImages = document.getElementsByTagName("img");

// for (let i of allImages) {
//   console.log(i.src);
//   i.src = "https://images.wsj.net/im-307680?width=620&size=1.5";
// }

const allLinks = document.querySelectorAll("a");
const paragraph = document.querySelectorAll("p");

for (let link of allLinks) {
  link.innerText = "Bitch Please";
  link.href = "https://www.rantingly.com";
}

paragraph.innerHTML =
  'The Silkie (also known as the <b>Silky</b> or Chinese silk chicken) is a <a href="https://www.rantingly.com" title="List of chicken breeds">Bitch Please</a> of <a href="https://www.rantingly.com" title="Chicken">Bitch Please</a> named for its atypically fluffy <a href="https://www.rantingly.com" title="Plumage">Bitch Please</a>, which is said to feel like <a href="https://www.rantingly.com" title="Silk">Bitch Please</a> and satin. The breed has several other unusual qualities, such as black skin and bones, blue earlobes, and five toes on each foot, whereas most chickens only have four. They are often exhibited in <a href="https://www.rantingly.com" title="Poultry">Bitch Please</a> shows, and appear in various colors. In addition to their distinctive physical characteristics, Silkies are well known for their calm, friendly temperament. It is among the most docile of poultry. Hens are also exceptionally <a href="https://www.rantingly.com" title="Broodiness">Bitch Please</a>, and care for young well. Though they are fair layers themselves, laying only about three eggs a week, they are commonly used to hatch eggs from other breeds and bird species due to their broody nature.';

for (let link of allLinks) {
  link.classList.add("testColor");
}
for (let par of paragraph) {
  par.classList.add("testBorder");
}
