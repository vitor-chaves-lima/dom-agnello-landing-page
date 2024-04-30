const amountText = document.getElementById("amount");
const priceText = document.getElementById("value");
const couponInput = document.getElementById("coupon-input");
const couponButton = document.getElementById("coupon-button");
const removeCouponButton = document.getElementById("remove-coupon-button");

let productPrice = 1200;
let amount = 1;
let validCoupon = false;

function clearCouponInput() {
  couponInput.value = "";
}

function updateCouponButtons() {
  couponButton.disabled = validCoupon;
  removeCouponButton.disabled = !validCoupon;
}

function formatPrice(price) {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function getTotalPrice() {
  return amount * productPrice;
}

function updateTotalPriceText() {
  priceText.innerText = formatPrice(getTotalPrice());
}

function updateAmountText() {
  amountText.innerText = amount;
}

function decrementItem() {
  if (amount > 1) {
    amount--;
    updateTotalPriceText();
    updateAmountText();
  }
}

function incrementItem() {
  amount++;
  updateTotalPriceText();
  updateAmountText();
}

function validateCoupon() {
  couponValue = couponInput.value;
  if (couponValue == "FIAP2024") {
    validCoupon = true;
    productPrice = 1200.0 - 0.1 * productPrice;
    updateCouponButtons();
    updateTotalPriceText();
  } else {
    alert("Digite um cupom válido");
  }
}

function removeCoupon() {
  validCoupon = false;
  productPrice = 1200.0;
  clearCouponInput();
  updateCouponButtons();
  updateTotalPriceText();
}

function buy() {
  alert(
    `Produto adicionado ao carrinho. Valor da compra: ${formatPrice(
      getTotalPrice()
    )}`
  );
}
