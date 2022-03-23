// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  console.log("descuento ", typeof descuento)
  const porcentajePrecioConDescuento = 100 - descuento;
  console.log("porcentajePrecioDescuento ", porcentajePrecioConDescuento)
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;

}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  
  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;
  
  // const coupons = [
  //   "Cupon1",
  //   "Cupon2",
  //   "Cupon3",
  // ];

  // let descuento;

  // switch(couponValue) {
  //   case coupons[0]: // "Cupon1"
  //     descuento = 15;
  //   break;
  //   case coupons[1]: // "Cupon2"
  //     descuento = 30;
  //   break;
  //   case coupons[2]: // "Cupon3"
  //     descuento = 25;
  //   break;
  // }

  const coupons = {
    "Cupon1": 15,
    "Cupon2": 30,
    "Cupon3": 25,
  }

  const precioConDescuento = calcularPrecioConDescuento(priceValue, coupons[couponValue]);

  const ResultP = document.getElementById("ResultP");
  ResultP.innerText = "El precio con descuento es de $" + precioConDescuento;

}



// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento
// });