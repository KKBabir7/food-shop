let cart = {};
let total = 0;

function addToCart(productName, price) {
  if (cart[productName]) {
    cart[productName].count++;
    cart[productName].total += price;
    const countEl = document.getElementById(`${productName}-count`);
    countEl.innerText = `${cart[productName].count}x`;
    const totalEl = document.getElementById(`${productName}-total`);
    totalEl.innerText = `£${cart[productName].total}`;
  } else {
    cart[productName] = { count: 1, price: price, total: price };
    const itemEl = document.createElement("div");
    itemEl.id = productName;
    itemEl.innerHTML = `
                <ul>
                    <li class="quantity">
                        <button  onclick="decreaseCartItem('${productName}', ${price})"><i class="bi bi-dash"></i></button>
                        <p id="${productName}-count">1x</p>
                        <button onclick="increaseCartItem('${productName}', ${price})"><i class="bi bi-plus-lg"></i></button>
                    </li>
                    <li class="p-name">
                       ${productName}
                    </li>
                    <li class="price"><p id="${productName}-total">£${cart[productName].total}</p></li>
                </ul>
    `;
    document.getElementById("cart-items").appendChild(itemEl);
  }
  total += price;
  var sertotal=Number(document.getElementById('ser-total').innerText)
  document.getElementById("cart-total").innerText = `£${total}`;
  document.getElementById("cartst-total").innerText = `£${total+sertotal}`;
  document.getElementById('mobile-total').innerHTML=`£${total+sertotal}`;
}

function increaseCartItem(productName, price) {
  cart[productName].count++;
  cart[productName].total += price;
  const countEl = document.getElementById(`${productName}-count`);
  countEl.innerText = `${cart[productName].count}x`;
  const totalEl = document.getElementById(`${productName}-total`);
  totalEl.innerText = `£${cart[productName].total}`;
  total += price;
  
  var sertotal=Number(document.getElementById('ser-total').innerText)
  document.getElementById("cart-total").innerText = `£${total}`;
  document.getElementById("cartst-total").innerText = `£${total+sertotal}`;
  document.getElementById('mobile-total').innerHTML=`£${total+sertotal}`;
}

function decreaseCartItem(productName, price) {
  if (cart[productName].count > 1) {
    cart[productName].count--;
    cart[productName].total -= price;
    const countEl = document.getElementById(`${productName}-count`);
    countEl.innerText = ` ${cart[productName].count}x`;
    const totalEl = document.getElementById(`${productName}-total`);
    totalEl.innerText = `£${cart[productName].total}`;
    total -= price;
    var sertotal=Number(document.getElementById('ser-total').innerText)
    document.getElementById("cart-total").innerText = `£${total}`;
    document.getElementById("cartst-total").innerText = `£${total+sertotal}`;
    document.getElementById('mobile-total').innerHTML=`£${total+sertotal}`;
  } else {
    removeCartItem(productName, price);
  }
}
function removeCartItem(productName, price) {
  const item = document.getElementById(productName);
  item.parentNode.removeChild(item);
  total -= cart[productName].total;
  delete cart[productName];
  var sertotal=Number(document.getElementById('ser-total').innerText)
  document.getElementById("cart-total").innerText = `£${total}`;
  document.getElementById("cartst-total").innerText = `£${total+sertotal}`;
  document.getElementById('mobile-total').innerHTML=`£${total+sertotal}`;
}