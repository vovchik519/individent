function toggleAddress() {
    var address = document.getElementById("address");
    if (address.style.display === "none") {
        address.style.display = "block";
    } else {
        address.style.display = "none";
    }
}

var swiper = new Swiper(".firstscreen__swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 'auto',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

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

var headerHeight = document.getElementsByTagName("header")[0].offsetHeight;
document.getElementsByClassName("firstscreen__wrapper")[0].style.paddingTop = headerHeight + "px";