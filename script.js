const createAccountBtn = document.querySelector(".create-account");
const loginHomePage = document.getElementById("login-home");
const logInBtn = document.querySelector(".login");
const signuplink = document.querySelector(".sign-in");
const loginPage = document.querySelector(".login-page");
const sinupPage = document.querySelector(".sign-up");

//to display the signup page on clicking the create account btn
createAccountBtn.addEventListener("click", () => {
  loginHomePage.style.display = "none";
  sinupPage.classList.remove("hide");
});

//to display the login page on clicking the login btn
logInBtn.addEventListener("click", () => {
  loginHomePage.style.display = "none";
  loginPage.classList.remove("hidden");
});

//clicking on the sign up link 
signuplink.addEventListener("click", () => {
  loginPage.classList.add("hidden");
  sinupPage.classList.remove("hide");
});

//to view password
const passwordViewer = document.querySelectorAll(".eye");
const passwordInput = document.querySelectorAll(".password");

passwordViewer.forEach(passwordView => {
  passwordView.addEventListener("click", () => {
    passwordInput.forEach(passwordInput => {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
    });
  });
})
