// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   const randomNumber = getRandomNumber();
 

//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });

// function getRandomNumber() {
//     return Math.floor(Math.random() * colors.length);
// }

const colortext = document.getElementById('colorText')
function changeColor() {
  let color = colortext.value;
  var patt = new RegExp("#");
  var res = patt.test(color);
  if (res) {
    alert ('not allowed hex colors here!');
  } else {
    document.body.style.backgroundColor = color;
  }
}

