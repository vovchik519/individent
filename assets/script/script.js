// padding первого блока от хедера

var headerHeight = document.getElementsByTagName("header")[0].offsetHeight;
document.getElementsByClassName("firstscreen__wrapper")[0].style.paddingTop = headerHeight + "px";


// всплывающий аддресс и телефон
function toggleAddress() {
    var address = document.getElementById("address");
    var phone = document.getElementById("phone");
    if (address.style.display === "none") {
        address.style.display = "flex";
        phone.style.display = "none";
    } else {
        address.style.display = "none";
    }
}

function togglePhone() {
    var address = document.getElementById("address");
    var phone = document.getElementById("phone");
    if (phone.style.display === "none") {
        phone.style.display = "flex";
        address.style.display = "none";
    } else {
        phone.style.display = "none";
    }
}

// слайдер
var swiperInfo = new Swiper(".firstscreen__swiper-info", {
    allowTouchMove: false,
});

var swiperImage = new Swiper(".firstscreen__swiper-image", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    controller: {
        control: swiperInfo,
    },
    slidesPerView: 'auto',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

// скрывающийся header

var header = document.getElementsByTagName("header")[0];
var headerHeight = header.offsetHeight;
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || currentScrollPos <= headerHeight) {
        header.classList.remove("hide");
    } else {
        header.classList.add("hide");
    }
    prevScrollpos = currentScrollPos;
}