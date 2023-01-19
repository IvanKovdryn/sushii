window.addEventListener("click", function (event) {
  let number;
  if (
    event.target.dataset.action === "prod-less" ||
    event.target.dataset.action === "prod-more"
  ) {
    const numberParent = event.target.closest(".prod-row-left");
    number = numberParent.querySelector(".prod-number");
  }
  if (event.target.dataset.action === "prod-less") {
    if (number.innerText > 1) {
      number.innerText = --number.innerText;
    } else if (
      event.target.closest(".cart-wrapper") &&
      parseInt(number.innerText) === 1
    ) {
      event.target.closest(".cart-item").remove();
      toggleCartStatus();
      sumPriceCart();
    }
  }
  if (event.target.dataset.action === "prod-more") {
    number.innerText = ++number.innerText;
  }
  if (
    event.target.hasAttribute("data-action") &&
    event.target.closest(".cart-wrapper")
  ) {
    sumPriceCart();
  }
});
