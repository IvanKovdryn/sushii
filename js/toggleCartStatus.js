function toggleCartStatus() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  const cartEmpty = document.querySelector(".cart-area");
  const cartOrder = document.querySelector(".cart-bottom");
  if (cartWrapper.children.length > 0) {
    cartEmpty.classList.add("none");
    cartOrder.classList.remove("none");
  } else {
    cartEmpty.classList.remove("none");
    cartOrder.classList.add("none");
  }
}
