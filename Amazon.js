// Function to toggle mobile menu visibility
function togglenav() {
  const mobi = document.getElementById("mobile");
  mobi.classList.toggle("show"); // Add or remove the 'show' class
}

// Event listener for the toggle button
const button = document.getElementById("buttom");
button.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent click from bubbling to document
  togglenav();
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const menu = document.getElementById("mobile");
  const button = document.getElementById("buttom");

  // If the click is outside both the button and the menu, close it
  if (!menu.contains(event.target) && !button.contains(event.target)) {
    menu.classList.remove("show");
  }
});
