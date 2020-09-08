const btn = document.querySelector(".btn-submit");
const err = document.querySelector(".error");
const input = document.querySelector("#email");
const iconErr = document.querySelector(".icon-error");


/*Melhorar função */
function validateEmail() {
  const reEmail = /^.+@\w+\.\w+$/;
  if (reEmail.test(input.value)) {
    err.style.display = "none"
  } else {
    err.style.display = "block";
    iconErr.style.display = "block"
  }
}

btn.addEventListener("click", validateEmail);