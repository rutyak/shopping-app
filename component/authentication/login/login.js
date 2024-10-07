function handleLogin() {
  console.log("login clicked");
  let email = document.getElementById("email-login").value;
  let password = document.getElementById("password-login").value;
  let alert= document.getElementById("alert");


  let users = JSON.parse(localStorage.getItem("users")) || [];


  let existingUser = false;

  users.forEach((user) => {
    if (user.email === email && user.password1 === password) {
      existingUser = true;
      localStorage.setItem("loggedInUser",JSON.stringify(user));
      return;
    }
  });

  if (existingUser) {
    alert.innerHTML = "Login Successfull !!";
    alert.style.color = "green";
    setTimeout(() => {
      window.location.href = "../../shop/shop.html";
    }, 3000);
  } else {
    alert.innerHTML = "Invalid password or username";
    return;
  }
}

let userProfile = document.getElementById("user-profile");

const user = JSON.parse(localStorage.getItem("loggedInUser"));
console.log("user....", user);

if (user !== "") {
  userProfile.style.display = "block";
} 