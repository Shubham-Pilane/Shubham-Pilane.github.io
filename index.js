
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

function downloadAndOpenResume() {
  // Get the resume link
  var resumeLink = document.getElementById('resume-link-2');

  // Simulate a click on the link to start the download
  var event = new MouseEvent('click');
  resumeLink.dispatchEvent(event);

  // Open the resume in a new tab
  window.open(resumeLink.href, '_blank');
}
     
// document.getElementById('resume-button-1').addEventListener("click", () => {
//   window.open("https://drive.google.com/drive/u/0/folders/19AE6HcipcqqVK-BWtjCQw6ohcZGCvKpm", "_blank");
// });

// document.getElementById('resume-button-2').addEventListener("click", () => {
//   window.open("https://drive.google.com/drive/u/0/folders/19AE6HcipcqqVK-BWtjCQw6ohcZGCvKpm", "_blank");
// });


// let header = document.querySelector("header");
// let menu = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");

// window.addEventListener("scroll", () => {
//   header.classList.toggle("shadow", window.scrollY > 0);
// });

// menu.onclick = () => {
//   navbar.classList.toggle("active");
// };
// window.onscroll = () => {
//   navbar.classList.remove("active");
// };

// document.getElementById('resume-button-1').addEventListener("click", () => {
//   window.open("https://drive.google.com/drive/u/0/folders/19AE6HcipcqqVK-BWtjCQw6ohcZGCvKpm", "_blank");
// });

// document.getElementById('resume-button-2').addEventListener("click", () => {
//   window.open("https://drive.google.com/drive/u/0/folders/19AE6HcipcqqVK-BWtjCQw6ohcZGCvKpm", "_blank");
// });

