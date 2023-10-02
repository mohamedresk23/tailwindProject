
const mobileBtn = document.querySelector("#mopile-btn");
const mobileManu = document.querySelector("#mobile-menu");

mobileBtn.addEventListener("click", () => {
  mobileManu.classList.toggle("hidden");
});