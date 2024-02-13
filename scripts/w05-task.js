/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
var templeList = [];

/* async displayTemples Function */
const displayTemples = (temples = []) => {
  temples.forEach((element) => {
    let article = document.createElement("article");
    let h3 = document.createElement("h3");
    let img = document.createElement("img");

    h3.textContent = element.templeName;
    img.src = element.imageUrl;
    img.alt = element.location;

    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch(
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
  );
  templeList = await response.json();
  console.log(templeList);
  displayTemples(templeList);
};

/* reset Function */
const reset = function () {
  templesElement.innerHTML = "";
};
/* filterTemples Function */
const filterTemples = function (temples) {
  reset();
  let filter = document.querySelector("#filtered").value;
  const filters = {
    utah: temples.filter((temp) =>
      temp.location.toLowerCase().includes("utah")
    ),
    notutah: temples.filter(
      (temp) => !temp.location.toLowerCase().includes("utah")
    ),
    older: temples.filter(
      (temp) => new Date(temp.dedicated) < new Date(1950, 0, 1)
    ),
    all: temples,
  };
  displayTemples(filters[filter]);
};

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {
  filterTemples(templeList);
});
