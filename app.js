// change the location of the button on page load

let randomNumber = Math.random();
const button = document.querySelector(".gameBtn");

// randomizer 
button.style.top = (100*Math.random()) + "%";
button.style.left = (100*Math.random()) + "%";

// toggle the visability of the button
// not visible on page load
// visibile on button click

const changeColour = document.getElementById('changeColour');
// count how many clicks

const clicks = document.querySelector('clicks');

changeColour.addEventListener('click', function onClick() {
  changeColour.style.backgroundColor = 'red';
  changeColour.style.color = 'white';  
});



// Click Counter Prints to page
let clickCount = 0;
function pageClicks() {
  clickCount += 1;
  document.getElementById("clicks").innerHTML = clickCount;
  console.log('the page has been clicked')
};

function reset(){
  clickCount = 0;
  document.getElementById("clicks").innerHTML  = clickCount;
}

// prompt for easy, medium, or hard
// if easy is chosen = small button
// if medium is chosen = medium button
// if hard is chosen = large button

//difficult levels
const difficulty = document.querySelector('.gameBtn');

function easy() {
  // button.style.width = 20
  button.style = "height: 50%" 
  button.style.top = (100*Math.random()) + "%";
  button.style.left = (100*Math.random()) + "%";
  // reset click count
  reset();
};

function medium() {
  // button.style.width = 20
  button.style = "height: 20%" 
  button.style.top = (100*Math.random()) + "%";
  button.style.left = (100*Math.random()) + "%";
  // reset click count
  reset();
};


function hard() {
  // button.style.width = 20
  button.style = "height: 10%" 
  button.style.top = (100*Math.random()) + "%";
  button.style.left = (100*Math.random()) + "%";
  // reset click count
  reset();
};
