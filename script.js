// scroll sections

// nav bar toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            // remove active from all links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // add active to the current link
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            // add animation class
            sec.classList.add('show-animate');

        } else {

            // remove animation when leaving section
            sec.classList.remove('show-animate');
        }
    });

};

// sticky header
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);
menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


//////////////////

const icon = document.getElementById("theme-icon");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  icon.classList.replace("fa-moon", "fa-sun");
}

// Toggle theme
icon.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  }
});

////////////light/dark
