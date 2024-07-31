// search js

document.getElementById('search-icon').addEventListener('click', () => {
  document.getElementById('search-box').style.display = 'block';
});

document.getElementById('search-btn').addEventListener('click', () => {
  const query = document.getElementById('search-input').value.toLowerCase();
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    if (section.innerText.toLowerCase().includes(query)) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
});


// Close


document.getElementById('close-search-btn').addEventListener('click', () => {
  document.getElementById('search-box').style.display = 'none';
});

document.getElementById('close-notification-btn').addEventListener('click', () => {
  document.getElementById('notification').style.display = 'none';
});


document.getElementById('search-input').addEventListener('keyup', () => {
  const query = document.getElementById('search-input').value.toLowerCase();
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    if (section.innerText.toLowerCase().includes(query)) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
});


// Menu


let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  navbar.classList.remove('active');
}


// notification js


document.addEventListener("DOMContentLoaded", function () {
  const notificationBtn = document.getElementById("notification-btn");
  const notification = document.getElementById("notification");
  const closeNotificationBtn = document.getElementById("close-notification-btn");

  notificationBtn.addEventListener("click", function () {
    notification.style.display = "block";
  });

  closeNotificationBtn.addEventListener("click", function () {
    notification.style.display = "none";
  });
});


// Slide 


const slider = document.querySelector('.swipe-wrapper');
const slides = document.querySelectorAll('.swipe-slide');
let currentIndex = 0;
const slideInterval = 4000;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, slideInterval);


// Send Msg notification

document.getElementById('send-message-btn').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the default action

  // Display the popup
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  popup.style.display = 'block';
  overlay.style.display = 'block';
});

document.getElementById('close-popup').addEventListener('click', function () {
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  popup.style.display = 'none';
  overlay.style.display = 'none';
});





function message() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phoneno = document.getElementById("phoneno").value;
  var msg = document.getElementById("msg").value;

  if (name && email && phoneno && msg) {
    showNotification("Thank Yoy for contact us!", "green");
    // window.location.href = "#";

    // Clear input fields after signup
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneno").value = "";
    document.getElementById("msg").value = "";

    // Redirect to index page
  } else {
    showNotification("Please fill out all fields.", "red");
  }
}
function showNotification(message, color) {
  var notification = document.getElementById("notificationmsg");
  notification.style.backgroundColor = color;
  notification.innerText = message;
  notification.style.display = "block";

  // Hide the notification after 3 seconds
  setTimeout(function () {
    notification.style.display = "none";
  }, 5000);
}


// document.getElementById('send-message-btn').addEventListener('click', function (event) {
//   event.preventDefault(); // Prevent the default action

//   // Display the popup
//   const popup = document.getElementById('popup');
//   const overlay = document.getElementById('overlay');
//   popup.style.display = 'block';
//   overlay.style.display = 'block';
// });

// document.getElementById('close-popup').addEventListener('click', function () {
//   const popup = document.getElementById('popup');
//   const overlay = document.getElementById('overlay');
//   popup.style.display = 'none';
//   overlay.style.display = 'none';
// });