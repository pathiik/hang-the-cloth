// Hamburger Menu Activation
document.querySelector(".header-hamburger-menu-icon").addEventListener("click", showHamburgerMenu);
document.querySelector(".active-hamburger-menu").addEventListener("click", showHamburgerMenu);

function showHamburgerMenu() {
    // console.log("clicked");
    document.querySelector(".header-hamburger-icon").classList.toggle("hidden");
    document.querySelector(".header-cross-icon").classList.toggle("visible");
    document.querySelector(".active-hamburger-menu").classList.toggle("visible");
    document.body.classList.toggle("no-scroll");
}

// Add to Cart Button
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("added");
        if (button.classList.contains("added")) {
            button.textContent = "Item Added to cart";
            button.style.backgroundColor = "green";
            setTimeout(() => {
                button.style.backgroundColor = "#0056b3";
                button.textContent = "Add to cart";
            }, 2000);
        }
        else {
            button.textContent = "Add to cart";
        }
    });
});

// More Products Button
document.querySelector(".products-load-more").addEventListener("click", showMore)
function showMore() {
    document.querySelector(".products-no-more").classList.toggle("visible");
    if (document.querySelector(".products-no-more").classList.contains("visible")) {
        document.querySelector(".products-load-more").textContent = "Show less";
    }
    else {
        document.querySelector(".products-load-more").textContent = "Show more";
    }
}

