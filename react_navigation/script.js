// Cache the user action on announcementBar 
const announcementBtn = document.querySelector(".announcementBar--close");

// Get the value from Local Storage 
let isDismissed = localStorage.getItem("announcement.dismiss") === "true";

// Hide the announcement if dismissed
if (isDismissed) {
  announcementBtn.parentElement.classList.add("hidden");
}

// Add click event listener to announcementBtn 
announcementBtn.addEventListener("click", function () {
  // If it's already dismissed, no need to do anything 
  if (isDismissed) {
    return;
  }

  // Update value and hide announcement 
  localStorage.setItem("announcement.dismiss", "true");
  announcementBtn.parentElement.classList.add("hidden");
  isDismissed = true;
})
