const form = document.querySelector("#searchForm");
const reload = document.querySelector("#reload");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const search = form.elements.show.value;
  form.elements.show.value = "";
  return request(search);
});

const request = async (search) => {
  const res = await axios.get(
    " http://api.tvmaze.com/search/shows?q=" + search
  );
  console.log(res);
  makeImages(res.data);
};
reload.addEventListener("click", () => {
  location.reload();
});

// const makeImages = (shows) => {
//   for (let result of shows) {
//     if (result.show.image) {
//       const image = document.createElement("img");
//       const label = document.createElement("figcaption");
//       const gallery = document.querySelector("#gallery");
//       const div = document.createElement("figure");
//       //   div.classList.add("row")
//       image.src = result.show.image.medium;
//       label.innerText = result.show.premiered;
//       gallery.append(image);
//       image.classList.add("m-2");

//       //   div.append(image, label);
//       //   console.log();
//     }
//   }
// };

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const image = document.createElement("img");
      const gallery = document.querySelector("#gallery");
      const div = document.createElement("div");
      const div2 = document.createElement("div");
      const div3 = document.createElement("h5");
      const div4 = document.createElement("p");
      const url = document.createElement("a");
      //   div.classList.add("row")
      div.classList.add("card");
      div2.classList.add("card-body");
      div3.classList.add("card-title");
      div4.classList.add("card-text");
      image.src = result.show.image.medium;
      div4.innerText = "Premiered: " + result.show.premiered;
      div3.innerText = result.show.name;
      url.innerText = "Website";
      url.href = result.show.url;

      gallery.append(div);
      div.append(image, div2);
      div2.append(div3, div4, url);

      //   div.append(image, label);
      //   console.log();
    }
  }
};
