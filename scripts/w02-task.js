const fullName = "Jean Pierre Michel Andrade Nieto"
const currentYear = new Date().getFullYear();
const profilePicture = "images/jean_profile.png ";

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food")
const yearElement = document.querySelector("#year");

const imageElement = document.getElementsByTagName('picture')[0].querySelector('img');

let favFoods = ["pizza","hamburguer","hot dog","roasted chicken","french fries","chicken salad","tizana"]

imageElement.src = profilePicture
imageElement.setAttribute("alt",`Profile image of ${fullName}`)
nameElement.innerHTML = `<strong>${fullName}</strong>`
yearElement.textContent = currentYear
foodElement.innerHTML += `<br>${favFoods}`
favFoods.push("bandeja paisa")
foodElement.innerHTML += `<br>${favFoods}`
favFoods.shift()
foodElement.innerHTML += `<br>${favFoods}`
favFoods.pop()
foodElement.innerHTML += `<br>${favFoods}`