/*
This projects are created by Ashraf Morningstar
GitHub Profile: https://github.com/AshrafMorningstar
*/

addToCartButton = document.querySelectorAll(".add-to-cart-button");
document
    .querySelectorAll(".add-to-cart-button")
    .forEach(function (addToCartButton) {
        addToCartButton.addEventListener("click", function () {
            addToCartButton.classList.add("added");
            setTimeout(function () {
                addToCartButton.classList.remove("added");
            }, 2000);
        });
    });