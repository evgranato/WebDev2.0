const form = document.querySelector("#searchForm");
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

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const image = document.createElement("img");
      image.src = result.show.image.medium;
      document.body.append(image);
    }
  }
};
