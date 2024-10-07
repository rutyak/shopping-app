
function handleSignup() {
  console.log("handle sgnUp clicked")
  let name = document.getElementById("name").value;
  let Lname = document.getElementById("Lname").value;
  let email = document.getElementById("email").value;
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;
  let alert = document.getElementById("alert");

  alert.textContent = "";

  // Validate inputs
  if (!name || !Lname || !email || !password1 || !password2) {
    alert.textContent = "All fields are required.";
    return;
  }

  if (!validateEmail(email)) {
    alert.textContent = "Please enter a valid email address.";
    return;
  }

  if (password1 !== password2) {
    alert.textContent = "Passwords do not match.";
    return;
  }

  if (password1.length < 6) {
    alert.textContent = "Password must be at least 6 characters long.";
    return;
  }

  alert.textContent = "Signup successful!";
  alert.style.color = "green";

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (!Array.isArray(users)) {
    users = [];
  }

  let existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    alert.textContent =
      "Email already in use. Please try again with a new email.";
    return;
  }

  let newUser = {
    name: name,
    Lname: Lname,
    email: email,
    password1: password1,
  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  window.location.href = "../login/login.html";
}

//profile
let userProfile = document.getElementById("user-profile");

const user = JSON.parse(localStorage.getItem("loggedInUser"));
console.log("user....", user);

if (user !== "") {
  userProfile.style.display = "block";
} 
