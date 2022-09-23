//https://firebase.google.com/docs/auth/web/google-signin
//https://firebase.google.com/docs/database/web/read-and-write

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { refs } from "./refs/refs";
import { userAuth, signOutUser, writeUserData } from "./service/firebase";

//TODO callback buttonLogin click
refs.buttonLogin.addEventListener("click", onLoginClick);

function onLoginClick(e) {
  const text = e.target.dataset.id;
  if (text === "Sign in") userAuth();
  else signOutUser();
}

export function updateStatusBtn(user) {
  let textBtn = "Sign in";
  if (user) {
    textBtn = "Sign out";
  }
  refs.buttonLogin.textContent = textBtn;
  refs.buttonLogin.setAttribute("data-id", textBtn);
}

export function toggleChat(user) {
  if (user) refs.chatContainer.classList.remove("is-hidden");
  else refs.chatContainer.classList.add("is-hidden");
}

//TODO callback formMessage submit
refs.formMessage.addEventListener("submit", onFormMessageSubmit);

function onFormMessageSubmit(e) {
  e.preventDefault();
  const message = e.target.elements.message.value.trim();
  if (!message) return;
  console.log("message :>> ", message);
  writeUserData({ message });
  e.target.reset();
}
