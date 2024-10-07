let url = "https://fakestoreapi.com/products";
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let data = [];
let inhtml = "";


function searchProducts() {
  const searchInput = document.getElementById("search").value.toLowerCase().trim();
  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().includes(searchInput);
  });
  console.log("filtered...", filteredData);
  renderData(filteredData);
}

document.getElementById("search").addEventListener("input", searchProducts);

let userProfile = document.getElementById("user-profile");

const user = JSON.parse(localStorage.getItem("loggedInUser"));

async function getData() {
   try {
    let response = await fetch(url);
    data = await response.json();
    let filteredData = data;
    console.log(data);
    renderData(filteredData);
   } catch (error) {
    console.erroe(error);
   }
}
getData();

if (user !== "") {
  userProfile.style.display = "block";
}

function AddToCart(id) {
  console.log("Add to cart clicked...");
  console.log("Data...", data);

  const product = data?.find((data) => data.id === id);

  const cartItem = cart?.find((item) => item.id === id);

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

let color = ["Red", "Blue", "Black", "Yellow", "Gray"];

function cardItems(image, price, colour, rating, id, title) {
  return `
  <div class="cards">
  <img src="${image}" alt="">
  <div class="middle">
      <p>$${price}</p>
      <p class="special-p">S,M,L</p>
  </div>
  <p class="limited-width">${title}</p>
  ${colour ? `<p>Colors: ${colour}</p>` : " "}
  <p>Rating:  ${rating}</p>
  <button type="button" id="addTocard-btn" onclick = "AddToCart(${id})">Add To Cart</button>
  </div>
  `;
}

function renderData(data) {
  let mensHtml = "";
  let womensHtml = "";
  let jewelleryHtml = "";
  let electronicsHtml = "";

  data.forEach((value) => {
    let random = Math.floor(Math.random() * color.length);
    if (value.category === "men's clothing") {
      mensHtml += cardItems(
        value.image,
        value.price,
        color[random],
        value.rating.rate,
        value.id,
        value.title
      );
    } else if (value.category === "women's clothing") {
      womensHtml += cardItems(
        value.image,
        value.price,
        color[random],
        value.rating.rate,
        value.id,
        value.title
      );
    } else if (value.category === "jewelery") {
      jewelleryHtml += cardItems(
        value.image,
        value.price,
        color[random],
        value.rating.rate,
        value.id,
        value.title
      );
    } else if (value.category === "electronics") {
      electronicsHtml += cardItems(
        value.image,
        value.price,
        false,
        value.rating.rate,
        value.id,
        value.title
      );
    }
  });

  document.getElementById("mens-cards").innerHTML = mensHtml;
  document.getElementById("womens-cards").innerHTML = womensHtml;
  document.getElementById("jewellerys-cards").innerHTML = jewelleryHtml;
  document.getElementById("electronics-cards").innerHTML = electronicsHtml;
}
