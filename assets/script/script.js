document.addEventListener('DOMContentLoaded', function () {
    const setPaddingTop = () => {
        const headerHeight = document.querySelector("header").clientHeight;
        document.querySelector(".firstscreen").style.paddingTop = `${headerHeight}px`;
    };

    setPaddingTop();

    window.addEventListener('resize', setPaddingTop);
});

var address = document.getElementById("address");
var phone = document.getElementById("phone");

function toggleAddress() {
    if (address.style.display === "none") {
        address.style.display = "flex";
        phone.style.display = "none";
    } else {
        address.style.display = "none";
    }
};

function togglePhone() {
    if (phone.style.display === "none") {
        phone.style.display = "flex";
        address.style.display = "none";
    } else {
        phone.style.display = "none";
    }
};

var swiperInfo = new Swiper(".firstscreen__swiper-info", {
    allowTouchMove: false,
    spaceBetween: 30,
});

var swiperImage = new Swiper(".firstscreen__swiper-image", {
    navigation: {
        nextEl: ".firstscreen-button-next",
        prevEl: ".firstscreen-button-prev",
    },
    spaceBetween: 30,
    controller: {
        control: swiperInfo,
    },
    slidesPerView: 'auto',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".doctors__swiper", {
    navigation: {
        nextEl: ".doctors-button-next",
        prevEl: ".doctors-button-prev",
    },
    slidesPerView: 'auto',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    spaceBetween: 15,
    loop: true,
    pagination: {
        el: ".doctors-pagination",
    },
});

var swiper = new Swiper(".work__swiper", {
    navigation: {
        nextEl: ".work-button-next",
        prevEl: ".work-button-prev",
    },
    slidesPerView: 'auto',
    spaceBetween: 15,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".work-pagination",
    },
});

var swiper = new Swiper(".review__slider-one", {
    navigation: {
        nextEl: ".slider-button-next-one",
        prevEl: ".slider-button-prev-one",
    },
    slidesPerView: 'auto',
    spaceBetween: 15,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".slider-pagination-one",
    },
});

var swiper = new Swiper(".review__slider-two", {
    navigation: {
        nextEl: ".slider-button-next-two",
        prevEl: ".slider-button-prev-two",
    },
    slidesPerView: 'auto',
    spaceBetween: 15,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".slider-pagination-two",
    },
});

var swiper = new Swiper(".review__slider-three", {
    navigation: {
        nextEl: ".slider-button-next-three",
        prevEl: ".slider-button-prev-three",
    },
    slidesPerView: 'auto',
    spaceBetween: 15,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".slider-pagination-three",
    },
});

var header = document.getElementsByTagName("header")[0];
var headerHeight = header.offsetHeight;
var prevScrollpos = window.pageYOffset;

function updateHeaderClass() {
    if (prevScrollpos <= headerHeight) {
        header.classList.remove("bg");
    } else {
        header.classList.add("bg");
    }
};

window.addEventListener("load", function () {
    updateHeaderClass();
});

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    prevScrollpos = currentScrollPos;
    updateHeaderClass();
};


let bodyOverflow = document.querySelector('body');
let menuBtn = document.querySelector('.menu__burger');
let headerWrap = document.querySelector('.header__menu');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('opened');
    headerWrap.classList.toggle('active');
    bodyOverflow.classList.toggle('lock');
    let isExpanded = menuBtn.classList.contains('opened');
    menuBtn.setAttribute('aria-expanded', isExpanded);
});

let closeMenu = document.querySelectorAll('.close-menu');

closeMenu.forEach(function (item) {
    item.addEventListener('click', function () {
        // Remove the active classes and body lock class
        menuBtn.classList.remove('opened');
        headerWrap.classList.remove('active');
        bodyOverflow.classList.remove('lock');
        let isExpanded = menuBtn.classList.contains('opened');
        menuBtn.setAttribute('aria-expanded', isExpanded);
    });
});
let button = document.querySelectorAll('.btn-popup');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
button.forEach(function (item) {
    item.addEventListener('click', function () {
        popup.classList.add('active');
        bodyOverflow.classList.add('lock-all');
    });
});

let summary = document.querySelectorAll('.price__summary');
summary.forEach(function (item) {
    item.addEventListener('click', function () {
        item.classList.toggle('active');
    });
});

popupClose.addEventListener('click', function () {
    popup.classList.remove('active');
    bodyOverflow.classList.remove('lock-all');
});

function openTab(evt, tabId) {
    var i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("services__tabs");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("services__tabs-links");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(tabId).style.display = "block";
    evt.currentTarget.className += " active";
};
let headerItemSmall = document.querySelector('.header__item-small');
let headerItemAbult = document.querySelector('.header__item-abult');
let tabLinksSmall = document.querySelector('.service__tabs-links-small');
let tabLinksAbult = document.querySelector('.service__tabs-links-abult');
headerItemSmall.addEventListener('click', function (evt) {
    openTab(evt, 'small');
    tabLinksSmall.classList.add('active');
    tabLinksAbult.classList.remove('active');
});
headerItemAbult.addEventListener('click', function (evt) {
    openTab(evt, 'abult');
    tabLinksAbult.classList.add('active');
    tabLinksSmall.classList.remove('active');
});

const elements = document.querySelectorAll('.text-fill');
elements.forEach(element => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    });
    observer.observe(element);
});

window.addEventListener('scroll', function () {
    const parallaxItems = document.querySelectorAll('.icons__item');
    let scrollPosition = window.pageYOffset;
    parallaxItems.forEach(function (parallax) {
        parallax.style.transform = 'translateY(' + scrollPosition * 0.2 + 'px)';
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var mapWrap = document.getElementById("map-wrap");
var mapImage = document.getElementById("map");
var mapMark = document.getElementById("mark");
const zoomInButton = document.getElementById("zoom-in");
const zoomOutButton = document.getElementById("zoom-out");
// Загружаем изображение и центрируем его при полной загрузке
mapImage.addEventListener("load", function () {
    mapWrap.scrollLeft = (mapImage.offsetWidth - mapWrap.offsetWidth) / 2;
    mapWrap.scrollTop = (mapImage.offsetHeight - mapWrap.offsetHeight) / 2;
});

// Обработчик событий для перемещения изображения
mapWrap.addEventListener("mousedown", function (e) {
    e.preventDefault();
    isScrolling = true;
    startX = e.pageX - mapWrap.offsetLeft;
    startY = e.pageY - mapWrap.offsetTop;
    scrollLeft = mapWrap.scrollLeft;
    scrollTop = mapWrap.scrollTop;
});

var isScrolling = false;
mapWrap.addEventListener("mousemove", function (e) {
    if (!isScrolling) return;
    e.preventDefault();
    var x = e.pageX - mapWrap.offsetLeft;
    var y = e.pageY - mapWrap.offsetTop;
    var walkX = (x - startX) * 1;
    var walkY = (y - startY) * 1;
    mapWrap.scrollLeft = scrollLeft - walkX;
    mapWrap.scrollTop = scrollTop - walkY;
});

mapWrap.addEventListener("mouseup", function () {
    isScrolling = false;
});

mapWrap.addEventListener("mouseleave", function () {
    isScrolling = false;
});

// Обработчики событий для увеличения/уменьшения изображения

zoomInButton.addEventListener("click", function () {
    var currentWidth = mapImage.offsetWidth;
    var currentHeight = mapImage.offsetHeight;
    var newWidth = Math.min(currentWidth + 400, 1700);
    var newHeight = Math.min(currentHeight + 400, 1700);
    mapImage.style.width = newWidth + "px";
    mapImage.style.height = newHeight + "px";
    mapWrap.scrollLeft = (mapImage.offsetWidth - mapWrap.offsetWidth) / 2;
    mapWrap.scrollTop = (mapImage.offsetHeight - mapWrap.offsetHeight) / 2;
});

zoomOutButton.addEventListener("click", function () {
    var currentWidth = mapImage.offsetWidth;
    var currentHeight = mapImage.offsetHeight;
    var newWidth = Math.max(currentWidth - 400, 1000);
    var newHeight = Math.max(currentHeight - 400, 1000);
    mapImage.style.width = newWidth + "px";
    mapImage.style.height = newHeight + "px";
    mapWrap.scrollLeft = (mapImage.offsetWidth - mapWrap.offsetWidth) / 2;
    mapWrap.scrollTop = (mapImage.offsetHeight - mapWrap.offsetHeight) / 2;
});

mapMark.style.width = mapImage.offsetWidth + "px";
mapMark.style.height = mapImage.offsetHeight + "px";

zoomInButton.addEventListener("click", function () {
    if (mapMark.style.width != mapImage.offsetWidth) {
        mapMark.style.width = mapImage.offsetWidth + "px";
        mapMark.style.height = mapImage.offsetHeight + "px";
    }
});

zoomOutButton.addEventListener("click", function () {
    if (mapMark.style.width != mapImage.offsetWidth) {
        mapMark.style.width = mapImage.offsetWidth + "px";
        mapMark.style.height = mapImage.offsetHeight + "px";
    }
});

const tooltip1 = document.getElementById("tooltip-1");

function toggleMark1() {
    if (tooltip1.style.display === "none") {
        tooltip1.style.display = "block";
    } else {
        tooltip1.style.display = "none";
    }
};

var toTop = document.querySelector(".to-top");
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 50) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
});

toTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});