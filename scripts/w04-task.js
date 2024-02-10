/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Jean Andrade",
    photo: "images/jean_profile.png",
    favoriteFoods:  [
                        "pizza","hamburguer",
                        "hot dog",
                        "roasted chicken",
                        "french fries",
                        "chicken salad",
                        "tizana"                        
                    ],
    hobbies: ["read scriptures", "draw", "play music", "listen to music", "learn new stuff", "play videogames"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "San Cristóbal, VE",
        length: "30 years"
    },
    {
        place: "Ureña, VE",
        length: "2 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby =>{
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place =>{
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").append(dt,dd)
});
