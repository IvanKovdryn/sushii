function sumPriceCart() {
  const cartItems = document.querySelectorAll(".cart-item");
  const cartPriceEl = document.querySelector(".cart-sum-number");
  const deliveryCost = document.querySelector(".cart-free");
  const deliveryUah = document.querySelector(".cart-delivery-uah");

  let totalPrice = 0;
  cartItems.forEach(function (item) {
    const amountEl = item.querySelector(".cart-number");
    const priceEl = item.querySelector(".cart-price");
    const currentPrice =
      parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    totalPrice += currentPrice;
  });
  cartPriceEl.innerText = totalPrice;
  if (cartPriceEl.innerText >= 800) {
    deliveryCost.innerText = "безплатно";
    deliveryUah.classList.add("none");
  } else if (totalPrice == 0) {
    deliveryCost.innerText = "0";
    deliveryUah.classList.remove("none");
  } else {
    deliveryCost.innerText = "99";
    deliveryUah.classList.remove("none");
    cartPriceEl.innerText = totalPrice + 99;
  }
}
