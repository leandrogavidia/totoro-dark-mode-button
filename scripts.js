const toggleButton = document.getElementById("toggle-button");
const mainContent = document.getElementById("main-content");
const toggleButtonValue = toggleButton.checked;

toggleButtonValue === true ? mainContent.classList.add("dark"): false;

toggleButton.addEventListener("change", () => mainContent.classList.toggle("dark"));