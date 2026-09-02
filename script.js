/* =================================
   HERO SLIDER
================================= */

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".hero-dot");

const previousButton = document.querySelector(".hero-prev");
const nextButton = document.querySelector(".hero-next");

let currentSlide = 0;


function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
}


function nextSlide() {

    let next = currentSlide + 1;

    if (next >= slides.length) {
        next = 0;
    }

    showSlide(next);
}


function previousSlide() {

    let previous = currentSlide - 1;

    if (previous < 0) {
        previous = slides.length - 1;
    }

    showSlide(previous);
}


if (nextButton) {
    nextButton.addEventListener("click", nextSlide);
}

if (previousButton) {
    previousButton.addEventListener("click", previousSlide);


}


/* Automatic hero slider */

if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}


/* =================================
   PRODUCT FILTER
================================= */

const productTabs = document.querySelectorAll(".product-tab");
const productCards = document.querySelectorAll(".product-card");


productTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        /* Remove active from all tabs */

        productTabs.forEach((item) => {
            item.classList.remove("active");
        });

        /* Make clicked tab active */

        tab.classList.add("active");


        /* Get selected category */

        const selectedCategory = tab.dataset.filter;


        /* Show / hide products */

        productCards.forEach((card) => {

            const productCategory = card.dataset.category;


            if (
                selectedCategory === "all" ||
                productCategory === selectedCategory
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});
const loadMoreButton = document.querySelector(".load-more");
const hiddenProducts = document.querySelectorAll(".hidden-product");

loadMoreButton.addEventListener("click", function () {

    hiddenProducts.forEach(function (product) {
        product.classList.remove("hidden-product");
    });

    loadMoreButton.style.display = "none";

});

/* =================================
   OFF-CANVAS MOBILE MENU
================================= */

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");


if (menuToggle && mainNav) {

    /* Create overlay */

    const menuOverlay = document.createElement("div");

    menuOverlay.className = "menu-overlay";

    document.body.appendChild(menuOverlay);


    /* Open / close menu */

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("mobile-open");

        menuOverlay.classList.toggle("active");

    });
    menuToggle.classList.remove("active");

    /* Close when overlay is clicked */

    menuOverlay.addEventListener("click", function () {

        mainNav.classList.remove("mobile-open");

        menuOverlay.classList.remove("active");

    });


    /* Close when a menu link is clicked */

    const menuLinks =
        mainNav.querySelectorAll("a");

    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("mobile-open");

            menuOverlay.classList.remove("active");

        });

    });

}
/* =================================
   CLOSE MOBILE MENU
================================= */

const mobileMenuClose =
    document.querySelector(".mobile-menu-close");

if (mobileMenuClose) {

    mobileMenuClose.addEventListener("click", function () {

        mainNav.classList.remove("mobile-open");

        const menuOverlay =
            document.querySelector(".menu-overlay");

        if (menuOverlay) {
            menuOverlay.classList.remove("active");
        }

        menuToggle.classList.remove("active");

    });
}
