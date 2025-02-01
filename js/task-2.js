function getShippingMessage(country, price, deliveryFee) {
  const allPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${allPrice} credits`;
}
