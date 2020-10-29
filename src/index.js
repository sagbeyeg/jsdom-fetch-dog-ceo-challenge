console.log('%c HI', 'color: firebrick')

//CHALLENGE 1
// on page load
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

// fetch the images using the url above ⬆️
fetch(imgUrl)

// parse the response as JSON
.then(response => response.json())
.then(data => { 
  const images = data.message 
  // console.log(images)

  images.forEach( imageUrl => {
    renderDogImages(imageUrl)
  })
});

// add image elements to the DOM for each🤔 image in the array
const dogContainer = document.querySelector("#dog-image-container")

function renderDogImages(imageURL) {
  const img = document.createElement("img")
  img.src = imageURL
  const dogContainer = document.querySelector("#dog-image-container")
  dogContainer.append(img)
}


//CHALLENGE 2
// on page load
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// fetch the images using the url above ⬆️
fetch(breedUrl)
// parse the response as JSON
  .then(response => response.json())
  .then(data => { 
    const breed = data.message 
    // console.log(breed)
    selectedDogBreeds = Object.keys(data.message)

    for (const breedType in breed) {
      // console.log(`${breedType}`);
      renderDogBreed(breedType)
    }
});

// add the breeds to the page in an <ul> (take a look at the included index.html)
const dogBreedContainer = document.querySelector("#dog-breeds")

function renderDogBreed(breedText) {
  const li = document.createElement("li")
  li.className = "list"
  li.innerText = breedText
  dogBreedContainer.append(li)
}


//CHALLENGE 3
// add JavaScript so that the font color of a particular <li> changes on click
// This can be a color of your choosing.
// When the user clicks any of the dog breed list items, the color the text should change.

dogBreedContainer.addEventListener("click", event => {
  // console.log(event.target)
  if (event.target.matches("li")) {
    event.target.style.color = "Orange"
  }
})


//CHALLENGE 4
// Once we are able to load all of the dog breeds onto the page, 
// add JavaScript so that the user can filter breeds that start 
// with a particular letter using a dropdown.

// For example, if the user selects 'a' in the dropdown, 
// only show the breeds with names that start with the letter a. 
// For simplicity, the dropdown only includes the letters a-d. 
// However, we can imagine expanding this to include the entire alphabet

const selectBreed = document.querySelector("#breed-dropdown")

selectBreed.addEventListener("change", event => {
    // event.target.matches("option")
    // console.log(event.target.value)
    filterBreeds(event.target.value)
})



function filterBreeds(letter) {
  dogBreedContainer.querySelectorAll("li").forEach( li => {
    if (li.textContent.startsWith(letter)) {
      li.style.display = ""
    } else {
      li.style.display = "none"
    }
    })
}