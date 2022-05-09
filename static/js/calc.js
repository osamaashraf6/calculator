var btn__value = document.getElementsByClassName("section__wrapper__btns__btn");
var section__wrapper__input = document.querySelector(
    ".section__wrapper__input"
);
var section__wrapper__input__sqrt = document.querySelector(
    ".section__wrapper__input__sqrt"
);
var inpt__value = document.querySelector(".section__wrapper__input__inpt");
var equal__value = document.querySelector("#equal");
var sqrt = document.querySelector("#btn");
var a = document.querySelector(".section__wrapper__input__sqrt__a").value;
var b = document.querySelector(".section__wrapper__input__sqrt__b").value;
var c = document.querySelector(".section__wrapper__input__sqrt__c").value;
console.log(a, b, c);
section__wrapper__input__sqrt.style.display = "none";
// =================================================================
equal__value.addEventListener("dblclick", function() {
    inpt__value.value = " ";
});
// =================================================================
for (let i = 0; i < btn__value.length; i++) {
    btn__value[i].addEventListener("click", function() {
        if (btn__value[i].textContent === "=") {
            inpt__value.value = eval(inpt__value.value);
        } else {
            inpt__value.value += btn__value[i].textContent;
        }
    });
}
// =================================================================
sqrt.addEventListener("dblclick", function() {
    section__wrapper__input.style.display = "none";
    section__wrapper__input__sqrt.style.display = "block";

});