
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');
const showAmPm = true;

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  const amPm = hour >= 12 ? 'PM' : 'AM';

  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
 
    document.body.style.backgroundImage = "url('data:image/jpeg;base64,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')";
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
  
    document.body.style.backgroundImage = "url('https://media.istockphoto.com/photos/sunrice-picture-id144967477?k=6&m=144967477&s=170667a&w=0&h=oniFCJ8bAWKOgBbY8ibS7DgduyFw_RMt2R7YIDhGfZY=')";
    greeting.textContent = 'Good Afternoon, ';
  } else {
   
    document.body.style.backgroundImage = "url('data:image/jpeg;base64,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')";
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  }
}


function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
