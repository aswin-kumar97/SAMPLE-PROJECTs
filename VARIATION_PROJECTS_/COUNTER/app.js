
let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
var decr = document.querySelector(".decrease");
var ddt = document.querySelector(".reset");


btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count < 0) {
      decrease.disabled = true;
    }
    if (count > 0) {
      value.style.color = "green";
      decr.classList.remove("disabled");
      ddt.classList.remove("disabled");
      decr.disabled = false;
    }
    if (count === 0) {
      value.style.color = "#222";
      decr.classList.add("disabled");
      ddt.classList.add("disabled");
      decr.disabled = true;

    }
    value.textContent = count;
  });
});

// function increaseBtn() {
//   var decr = document.querySelector(".decrease");
//   var ddt = document.querySelector(".reset");
//   decr.classList.remove("disabled");
//   ddt.classList.remove("disabled");
// };




