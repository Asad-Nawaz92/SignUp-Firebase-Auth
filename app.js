// SIGN UP AND SIGN IN

function signup() {
  var nameInput = document.getElementById("signup-name");
  var emailInput = document.getElementById("signup-email");
  var passwordInput = document.getElementById("signup-pass");
  var confirmpasswordInput = document.getElementById("signup-confirm-pass");
  var agreeCheckbox = document.getElementById("agree");

  var name = nameInput.value;
  var email = emailInput.value;
  var password = passwordInput.value;
  var confirmPassword = confirmpasswordInput.value;
  var agreeChecked = agreeCheckbox.checked;

  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (
    name === "" ||
    confirmPassword === "" ||
    email === "" ||
    password === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill in all fields.",
    });
    return;
  }

  if (!agreeChecked) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please agree to the terms and conditions.",
    });
    return;
  }

  if (!emailPattern.test(email)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Invalid email format. Please use the format: example@gmail.com.",
    });
    return;
  }

  if (password.length < 6) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Password must be at least 6 characters long.",
    });
    return;
  }

  if (password !== confirmPassword) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Passwords do not match.",
    });
    return;
  }

  var usersJSON = localStorage.getItem("users");
  var users = usersJSON ? JSON.parse(usersJSON) : [];

  var existingUser = users.some(function (user) {
    return user.email === email;
  });

  if (existingUser) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "User with this email already exists. Please Login.",
    }).then(() => {
      location.href = "./signin.html";
    });
    return;
  }

  var newUser = {
    name: name,
    email: email,
    password: password,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  location.href = "./signin.html";
}

function signin() {
  var emailInput = document.getElementById("signin-email");
  var passwordInput = document.getElementById("signin-pass");

  var email = emailInput.value;
  var password = passwordInput.value;

  if (email === "" || password === "" || !rememberChecked) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill in all fields.",
    });
    return;
  }

  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(email)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Invalid email format. Please use the format: example@gmail.com.",
    });
    return;
  }

  var usersJSON = localStorage.getItem("users");
  var users = usersJSON ? JSON.parse(usersJSON) : [];

  var user = users.find(function (e) {
    return e.email === email && e.password === password;
  });

  if (user) {
    location.href = "./welcome.html";
  } else {
    if (
      !users.some(function (e) {
        return e.email === email;
      })
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid email. Please try again.",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid password. Please try again.",
      });
    }
  }
}

function logOut() {
  location.href = "./signin.html";
}
