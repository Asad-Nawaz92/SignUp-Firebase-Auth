const firebaseConfig = {
  apiKey: "AIzaSyDa1y03PJzImKtToZ7U37cu2O1nkQIC7Vo",
  authDomain: "signup-auth-474ba.firebaseapp.com",
  projectId: "signup-auth-474ba",
  storageBucket: "signup-auth-474ba.appspot.com",
  messagingSenderId: "132636142418",
  appId: "1:132636142418:web:91edf99f16e2e048d4a88b"
};

const fireBase = firebase.initializeApp(firebaseConfig);

function signup() {
  var emailInput = document.getElementById("signup-email");
  var passwordInput = document.getElementById("signup-pass");

  var email = emailInput.value;
  var password = passwordInput.value;

  if (email === "" || password === "") {
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

  if (password.length < 6) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Password must be at least 6 characters long.",
    });
    return;
  }

  firebase.auth().createUserWithEmailAndPassword(email, password)
   .then((userCredential) => {
      var user = userCredential.user;
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "User account created successfully.",
      }).then(() => {
        location.href = "./signin.html";
      });
    })
   .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    });
}

function signin() {
  var emailInput = document.getElementById("signin-email");
  var passwordInput = document.getElementById("signin-pass");

  var email = emailInput.value;
  var password = passwordInput.value;

  if (email === "" || password === "") {
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

  firebase.auth().signInWithEmailAndPassword(email, password)
   .then((userCredential) => {
      var user = userCredential.user;
      window.location.href = "./welcome.html";
    })
   .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    });
}

function logOut(){
  window.location.href = "./signin.html";
}