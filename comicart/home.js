let searchform = document.querySelector(".search-form");

document.querySelector("#search").onclick = () => {
  searchform.classList.toggle("active");
};

var swiper = new Swiper(".container", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});


