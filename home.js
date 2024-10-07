function goToSignup() {
  document.getElementById("container1").style.display = "none";
  window.location.href = "./component/authentication/signup/signup.html";
}

function goToLogin() {
  document.getElementById("container1").style.display = "none";
  window.location.href = "./component/authentication/login/login.html";
}

//profile
let userProfile = document.getElementById("user-profile");

const user = JSON.parse(localStorage.getItem("loggedInUser"));
console.log("user....", user);

if (user !== "") {
  userProfile.style.display = "block";
} 
