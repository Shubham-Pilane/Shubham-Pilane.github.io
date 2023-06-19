let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

document.getElementById('resume-button-1').addEventListener("click", () => {
  window.open("https://drive.google.com/drive/u/0/folders/19AE6HcipcqqVK-BWtjCQw6ohcZGCvKpm", "_blank");
});

document.getElementById('resume-button-2').addEventListener("click", () => {
  window.open("https://drive.google.com/drive/u/0/folders/19AE6HcipcqqVK-BWtjCQw6ohcZGCvKpm", "_blank");
});

