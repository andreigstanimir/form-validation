const form = document.querySelector("#form");
const password1El = document.querySelector("#password1");
const password2El = document.querySelector("#password2");
const messageContainer = document.querySelector(".message-container");
const message = document.querySelector("#message");

let isValid = false;
let passwordsMatch = false;

const validateForm = function () {
  // Using constraint API
  isValid = form.checkValidity();

  //   Style main message for an error
  if (!isValid) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }

  //   Check to see if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    message.textContent = "Make sure passwords match.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }
  //   If form is valid and passwords match
  if (isValid && password2El) {
    message.textContent = "Successfully registered!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
};

const storeFormData = function () {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  console.log(user);
};

const processFormData = function (event) {
  event.preventDefault();
  //   console.log(event.target[0].value);

  //   Validate form
  validateForm();
  //   Submit data if valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
};

// Event Listener
form.addEventListener("submit", processFormData);
