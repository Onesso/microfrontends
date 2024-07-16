import faker from "faker";

let product = "";

let i = 0;

for (i = 0; i < 3; i++) {

  const name = faker.commerce.productName();

  product += `<div>${name}</div>`;

}

document.querySelector("#dev-product").innerHTML = product;
