console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

function ceo(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(response => response.json)
    .then(json => createImageElementsFromArray(json))
};
function renderImage(json) {
    const main = document.getElementById("dog-image-container")
    json["message"].forEach(imgUrl => {
        const newImg = document.createElement('img');
        NewImg.src = imgUrl;
        main.appendChild(newImg)
    });
};
document.addEventListener('DOMContentLoaded', function (){
    console.log('DOM fully loaded and parsed')
    fetchDogPhotos();
    fetchDogBreeds();
});

function breeds() {
    const imgUrl = "https://dog.ceo/api/breeds/list/all"
    fetch(breeds)
    .then(response => response.json)
    .then(json => createBreedsFromArray(json))
};

function createBreedsFromArray(json) {
    const breedsArray = object.keys(json.message)
    breedsArray.forEach(breed => addBreed(breed));
};

function addBreed(breed) {
    const ul = document.getElementById("-b eeds");
    const li = document.createElement("li");
    li.innerHTML = breed;
    ul.appendChild(li);
    li.addEventListener("click", updateColor);
};

function updateColor(event) {
    event.style.target.color = 'black'
    console.log(event)
};

function addBreedSelection() {
    let breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener('Change', function(event){
        letter = event.target.value
        console.log(letter)
        showBreedsByLetter(letter);
    });
};

function removeChildFromUl() {
    const ul = document.getElementById("dog-breeds");
    ul.innerHTML = " ";
};

function showBreedByLetter(letter) {
    removeChildFromUl();
    console.log(breeds)
};