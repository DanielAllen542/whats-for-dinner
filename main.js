
var letsCookButton = document.querySelector('.lets-cook-butt');
var radio1 = document.querySelector('.radio-1');
var radio2 = document.querySelector('.radio-2');
var radio3 = document.querySelector('.radio-3');
var clearButton = document.querySelector('.clear-butt');
var cook = document.getElementsByName('food-choice');


var sides = ['Fries', 'Poutine', 'Sprouts'];
var mainDishes = ["Fillet", "Brocollini", 'Mashed Potatoes', 'Demi'];
var desserts = ['Ice Cream', 'Pudding', 'Crem bulee', 'dougnuts'];

letsCookButton.addEventListener('click',sorryHannah);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function letsCook() {
  for(i = 0; i < cook.length; i++){
    if(radio1.checked) {
      document.getElementById('box2').innerHTML =
      `<article id="box2">
       <p class='lets-cook-p'>You should make:</p>
       <br>
       <p id='p-value'>${sides[getRandomIndex(sides)]}!</p>
       <br>
       <button id='clear-butt'>CLEAR</button>
      </article>`;
    }
    if(radio2.checked) {
      document.getElementById('box2').innerHTML =
      `<article id="box2">
       <p class='lets-cook-p'>You should make:</p>
       <br>
       <p id='p-value'>${mainDishes[getRandomIndex(mainDishes)]}!</p>
       <br>
       <button id='clear-butt'>CLEAR</button>
      </article>`;
    }
    if(radio3.checked) {
      document.getElementById('box2').innerHTML =
      `<article id="box2">
       <p class='lets-cook-p'>You should make:</p>
        <br>
       <p id='p-value'>${desserts[getRandomIndex(desserts)]}!</p>
        <br>
       <button id='clear-butt'>CLEAR</button>
      </article>`;
    }
  }
}
// function letsCookMain(dish) {
//   var cook = document.getElementsByName('main-choice');
//   for(i = 0; i < cook.length; i++){
//     if(cook[i].checked) {
//       document.getElementById('box2').innerHTML =
//       `<article id="box2">
//        <p class='lets-cook-p'>You should make:</p>
//        <p>${mainDishes[getRandomIndex(mainDishes)]}!</p>
//
//         <!-- <img class="cookpot" src="assets/burger-friends.jpg" alt=""> -->
//       </article>`;
// }
//   }
//     }
