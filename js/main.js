// header
const burger = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const menuLink = document.querySelector(".menu__list-link");
const body = document.body;
if (burger && menu) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });
  menuLink.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });
}

// ========about===========
let swiper = new Swiper(".about__swiper", {
  speed: 2500,
  loop: true,
  spaceBetween: 460,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".about__arrow-right",
    prevEl: ".about__arrow-left",
  },
});

// =========teachers=======

const modal = new GraphModal();

const teachersBtn = document.querySelectorAll(".teachers__btn");
const about = document.querySelectorAll(".teachers__content");
const close = document.querySelectorAll(".teachers__close");

for (let item of teachersBtn) {
  item.addEventListener("click", function () {
    const content = document.querySelector("#" + item.dataset.teach);
    content.classList.add("active");

    for (i of close) {
      i.addEventListener("click", function () {
        content.classList.remove("active");
      });
    }
  });
}

let teachersSwiper = new Swiper(".teachers__swiper", {
  speed: 1300,
  loop: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },

  effect: "fade",
  navigation: {
    nextEl: ".teachers__arrow-right",
    prevEl: ".teachers__arrow-left",
  },
});

// ==========revievs===========
let reviewsSwiper = new Swiper(".reviews__swiper", {
  speed: 2600,

  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  grabCursor: true,
  pagination: {
    el: ".reviews__pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      spaceBetween: 20,
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
      loop: false,
    },
  },
});

wow = new WOW({
  offset: 200,
});
wow.init();

// ==== classes  -  табы

const tabLink = document.querySelectorAll(".classes-lang__tab-link");
const tabText = document.querySelectorAll(".classes-lang__tab-box");
const tabTextFirst = document.querySelector(".classes-lang__tab-box");

console.log(tabLink[2], tabLink[5]);

for (let item of tabLink) {
  tabTextFirst.classList.remove("hidden");

  item.addEventListener("click", function () {
    console.log(item);

    item.classList.add("tab-up");

    for (let i of tabLink) {
      console.log(i);
      if (i !== item) {
        i.classList.remove("tab-up");
      }
    }
    for (let element of tabText) {
      element.classList.add("hidden");
    }

    const content = document.querySelector("#" + item.dataset.tab);

    content.classList.remove("hidden");
  });
}

// =======data========
// Получаем текущий год
const currentYear = new Date().getFullYear();

// Находим элемент с классом "footer-year"
const footerYear = document.querySelector(".footer-year");

// Заменяем текст внутри элемента
footerYear.textContent = `© ${currentYear} 2WAYS `;
