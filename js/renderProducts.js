const productsContainer = document.querySelector("#products-container");

getProducts();

async function getProducts() {
  const response = await fetch("./js/products.json");
  const productsArray = await response.json();
  renderProducts(productsArray);
}
function renderProducts(productsArray) {
  productsArray.forEach(function (item) {
    const productHTML = `
    <div class="prod" data-id="${item.id}">
  <div class="prod-img-wrapper">
    <img class="prod-img" src="./img/${item.imgSrc}" alt="img" />
  </div>
  <div class="prod-name">${item.title}</div>
  <div class="prod-bottom">
    <div class="prod-count">${item.itemsInBox} шт.</div>
    <div class="prod-count-row">
      <div class="prod-row-left">
        <div class="prod-less" data-action="prod-less">-</div>
        <div class="prod-number" data-action="prod-number">1</div>
        <div class="prod-more" data-action="prod-more">+</div>
      </div>
      <div class="prod-row-right">
        <div class="prod-gram">${item.weight} г.</div>
        <div class="prod-price">${item.price}</div>
      </div>
    </div>
    <button data-cart class="prod-add-cart">
      <span class="plus"></span><span>В корзину</span>
    </button>
  </div>
</div>
`;
    productsContainer.insertAdjacentHTML("beforeend", productHTML);
  });
}
