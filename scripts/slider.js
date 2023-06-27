const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#products");
const computed = window.getComputedStyle(items);

right.addEventListener("click", function(e) {
    e.preventDefault();
    let currentRight = parseInt(computed.right);

if (currentRight < 500) {
    items.style.right = currentRight + 550 + 940 + "px";
    }
});

left.addEventListener("click", function(e) {
    e.preventDefault();
    let currentRight = parseInt(computed.right);

if (currentRight > 0) {
    items.style.right = currentRight - 550 - 940 + "px";
    }
});