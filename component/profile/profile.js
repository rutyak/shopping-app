let userName = document.getElementById("user-name");
let userEmail = document.getElementById("user-email");

let users = JSON.parse(localStorage.getItem("loggedInUser")) || [];
console.log("usesr......", users);

if (users) {
  userName.textContent = users.name +" "+ users.Lname;
  userEmail.textContent = users.email;
} 

function handleLogout(){
  console.log("logout clicked");
  localStorage.setItem("loggedInUser", JSON.stringify(""));
  window.location.href= "../../index.html";
}