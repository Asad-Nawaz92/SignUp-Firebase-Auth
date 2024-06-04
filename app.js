const firebaseConfig = {
  apiKey: "AIzaSyDa1y03PJzImKtToZ7U37cu2O1nkQIC7Vo",
  authDomain: "signup-auth-474ba.firebaseapp.com",
  projectId: "signup-auth-474ba",
  storageBucket: "signup-auth-474ba.appspot.com",
  messagingSenderId: "132636142418",
  appId: "1:132636142418:web:91edf99f16e2e048d4a88b",
};

// Initialize Firebase
const fireBase = firebase.initializeApp(firebaseConfig);

// SignUp/SignIn Form
function signup() {
  const emailInput = document.getElementById("signup-email");
  const passwordInput = document.getElementById("signup-pass");

  const email = emailInput.value;
  const password = passwordInput.value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "User account created successfully.",
      }).then(() => {
        window.location.href = "./signin.html";
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    });
}

function signin() {
  const emailInput = document.getElementById("signin-email");
  const passwordInput = document.getElementById("signin-pass");

  const email = emailInput.value;
  const password = passwordInput.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = "./welcome.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    });
}

function logOut() {
  window.location.href = "./signin.html";
}
