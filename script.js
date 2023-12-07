
const header = document.querySelector(".header");
const sidebar = document.querySelector(".sidebar");

header.addEventListener("click", () => {
    header.classList.toggle("active");
    sidebar.classList.toggle("active");

})

document.querySelectorAll(".a").forEach(n => n.addEventListener("click", () => {
  header.classList.remove("active");
  sidebar.classList.remove("active");
}))

// Function to open full image
function openFullImg(imgElement) {
  const fullImg = document.getElementById("fullImg");
  fullImg.src = imgElement.src;
  document.getElementById("fullImgBox").style.display = "flex";
}

// Function to close full image
function closeFullImg() {
  document.getElementById("fullImgBox").style.display = "none";
}

// Attach click listeners to each image for full image view
const images = document.querySelectorAll(".img img");
images.forEach(img => {
  img.addEventListener("click", () => {
    openFullImg(img);
  });
});

// Function to show notification and fade it out after a certain time
function showNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.opacity = "0";
    setTimeout(() => {
      notification.style.display = "none";
      notification.style.opacity = "1";
    }, 1000); // Restore display after fadeout animation (1 second)
  }, 3000); // Show notification for 3 seconds
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form data
    const formData = new FormData(form);

    // Send form data to Google Forms using Fetch API
    fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSewk6r6HoTDTFZs-gZOnCM1FuY7hjwjr3lBzNfKE81Ks03OwA/formResponse", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          showNotification("RSVP Sent Successfully!"); // Show success message
          form.reset(); // Optionally, reset the form after successful submission
        } else {
          showNotification("RSVP Sent Successfully!"); // Show error message
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        showNotification("RSVP Sent Successfully!"); // Show error message
      });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  var spinner = document.querySelector('.loadingio-spinner-heart-1twfzkwm62c');
  spinner.style.display = 'block'; // Display the spinner
  // You can add additional code here to load data or perform tasks
  
  // Simulate a delay to hide the spinner after a certain time (e.g., 3 seconds)
  setTimeout(function() {
    spinner.style.display = 'none'; // Hide the spinner after 3 seconds
  }, 2000); // Adjust the time as needed
});




