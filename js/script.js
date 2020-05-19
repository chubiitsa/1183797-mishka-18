var navMain = document.querySelector(".menu");
var navToggle = document.querySelector(".menu__toggle");
var link = document.querySelector(".cart__button");
var popup = document.querySelector(".modal");
var overlay = document.querySelector(".modal__overlay");

navMain.classList.remove("menu--nojs");
navToggle.addEventListener("click", function () {
  navMain.classList.toggle("menu--opened");
});

function initPopup () {
  if (!popup) {
    return
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal--show");
    overlay.classList.add("modal__overlay--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.code === "Escape") {
      if (popup.classList.contains("modal--show")) {
        evt.preventDefault();
        popup.classList.remove("modal--show");
        overlay.classList.remove("modal__overlay--show");
      }
    }
  });

  overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal--show");
    overlay.classList.remove("modal__overlay--show");
  });
}

initPopup();

function initYandexMap () {
  if (!document.querySelector(".contacts__map")) {
    return
  }

  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("yandex-map", {
      center: [59.938631, 30.323055],
      zoom: 17,
      controls: []
    });

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: "ул. Большая Конюшенная 19/8, Санкт-Петербург",
      balloonContent: "Магазин Мишка"
    }, {
      iconLayout: "default#image",
      iconImageHref: "img/icon-map-pin.png",
      iconImageSize: [67, 100],
      iconImageOffset: [-40, -90]
    });

    myMap.geoObjects
      .add(myPlacemark);
  }
}

initYandexMap();

svg4everybody();
