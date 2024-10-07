let userProfile = document.getElementById("user-profile");

const user = JSON.parse(localStorage.getItem("loggedInUser"));
console.log("user....", user);

if (user !== "") {
  userProfile.style.display = "block";
} 

let cartItem = document.getElementById("cart-items");

let cart = JSON.parse(localStorage.getItem("cart"))
console.log("cart...",cart);

let inhtml = "";
let totalPrice = 0;
const deliveryCharge = 5.00;

cart.forEach((item) => {
  console.log(item);
  inhtml += `
    <div class="cart-items">
      <img src=${item.image} alt="img">
      <div class="title">${item?.title}</div>
      <div class="middle">
        <p>$${item.price.toFixed(2)}</p>
        <p class="special-p">Quantity: ${item.quantity}</p>
      </div>   
    </div>
  `;
  totalPrice += item.price * item.quantity;
});

const finalAmount = totalPrice + deliveryCharge;

cartItem.innerHTML = inhtml;
document.getElementById("total-price").textContent = `$${totalPrice.toFixed(2)}`;
document.getElementById("final-amount").textContent = `$${finalAmount.toFixed(2)}`;

document.getElementById("checkout-button").addEventListener("click", showFinalSummary);

function showFinalSummary() {
  const summaryContainer = document.getElementById("summary-container");
  let summaryHtml = `
    <h2>Final Summary</h2>
    <div id="summary-items">
  `;

  summaryHtml += `
    <p>Total: $${totalPrice.toFixed(2)}</p>
    <p>Delivery Charges: $${deliveryCharge.toFixed(2)}</p>
    <h3>Final Amount: $${finalAmount.toFixed(2)}</h3>
    <div class="delivery-address">
      <h3>Delivery Address</h3>
      <input type="text" id="address-line1" placeholder="Address Line 1" />
      <input type="text" id="address-line2" placeholder="Address Line 2" />
      <input type="text" id="city" placeholder="City" />
      <input type="text" id="state" placeholder="State" />
      <input type="text" id="zip" placeholder="ZIP Code" />
    </div>
    <button id="confirm-button">Confirm Purchase</button>
  `;

  summaryContainer.innerHTML = summaryHtml;
  summaryContainer.style.display = "block";

  document.getElementById("confirm-button").addEventListener("click", confirmPurchase);
}

function confirmPurchase() {
  const addressLine1 = document.getElementById("address-line1").value;
  const addressLine2 = document.getElementById("address-line2").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const zip = document.getElementById("zip").value;

  if (!addressLine1 || !city || !state || !zip) {
    alert("Please fill in all required address fields.");
    return;
  }

  alert("Purchase confirmed! Your items will be delivered to:\n" + 
    `${addressLine1}, ${addressLine2}, ${city}, ${state}, ${zip}`);
}


function clearCart(){
  console.log("clear cart clicked");

  let cart = [];

  localStorage.setItem("cart",JSON.stringify(cart));

  window.location.reload();
}

