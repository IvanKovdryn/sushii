const cartWrapper = document.querySelector(".cart-wrapper");
window.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-cart")) {
    const card = event.target.closest(".prod");
    const prodInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".prod-img").getAttribute("src"),
      title: card.querySelector(".prod-name").innerText,
      itemsInBox: card.querySelector(".prod-count").innerText,
      weight: card.querySelector(".prod-gram").innerText,
      price: card.querySelector(".prod-price").innerText,
      counter: card.querySelector(".prod-number").innerText,
    };
    const itemInCart = cartWrapper.querySelector(`[data-id="${prodInfo.id}"]`);
    if (itemInCart) {
      const elInfo = itemInCart.querySelector(".cart-number");
      elInfo.innerText =
        parseInt(elInfo.innerText) + parseInt(prodInfo.counter);
    } else {
      const cartItemHTML = `
<div class="cart-item" data-id="${prodInfo.id}">
  <div class="cart-img-wrapper">
    <img class="cart-img" src="${prodInfo.imgSrc}" alt="img" />
  </div>
  <div class="cart-description">
    <div class="cart-title">${prodInfo.title}</div>
    <div class="cart-subtitle">
      <span class="cart-score">${prodInfo.itemsInBox}</span> /
      <span class="cart-gram">${prodInfo.weight}</span>
    </div>
    <div class="cart-count-wrapper">
      <div class="prod-row-left cart-count">
        <span class="cart-minus" data-action="prod-less">-</span>
        <span class="prod-number cart-number">${prodInfo.counter}</span>
        <span class="cart-plus" data-action="prod-more">+</span>
      </div>
      <div class="cart-price">${prodInfo.price}</div>
    </div>
  </div>
</div>
`;
      cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
    }
    card.querySelector(".prod-number").innerText = "1";
    toggleCartStatus();
    sumPriceCart();
  }
});
