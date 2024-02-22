const gallery = document.querySelector("#gallery");
let jewelsList = [];

const getJewels = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/chronojean/cse121b/main/images/jewelry/jewels.json"
  );
  jewelsList = await response.json();
  console.log(jewelsList);
  jewelsList.sort(
    (a, b) => parseFloat(b.Pricing.slice(1)) - parseFloat(a.Pricing.slice(1))
  );
  drawJewelryCards(jewelsList);
};

const drawJewelryCards = (jewelryList = []) => {
  jewelryList.forEach((jewel) => {
    let article = document.createElement("article");
    let name = document.createElement("h3");
    let picture = document.createElement("img");

    name.innerHTML = `${jewel.Name} - ${jewel.Type} - ${jewel.Pricing}`;
    picture.alt = jewel.img_alt;
    picture.src = jewel.img_src;

    article.appendChild(name);
    article.appendChild(picture);

    article.classList.add("card");
    gallery.appendChild(article);
  });
};

function openModal() {
  document.getElementById("myModal").style.display = "block";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
  // Obtener el contenedor de la galería
  const gallery = document.getElementById("gallery");

  // Agregar un evento clic a cada imagen dentro de la galería
  gallery.addEventListener("click", function (event) {
    const selectedProduct = document.getElementById("selected_product");

    // Verificar si el elemento clickeado es una imagen
    if (event.target.tagName === "IMG") {
      // Mostrar la imagen seleccionada en la ventana modal
      selectedProduct.innerHTML = `<img src="${event.target.src}" alt="Selected Product">`;
      openModal();
    }
  });
});

getJewels();
