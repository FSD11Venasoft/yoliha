const faBars = document.querySelector(".fa-bars");
const sideBar = document.getElementsByClassName("sidebar")[0];

faBars.addEventListener('click', function(e) {
   sideBar.classList.toggle('sidebar')
});

