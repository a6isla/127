const text = "Tyrant Siloh";
let index = 0;
const typingTextElement = document.getElementById("typing-text");
const typingIndicator = document.getElementById("typing-indicator");

function typeText() {
  if (index < text.length) {
    typingTextElement.textContent += text.charAt(index);
    index++;
  } else {
    clearInterval(typingInterval); // Stop typing after text is complete

    // Restart typing after a short delay without hiding the typing indicator
    setTimeout(() => {
      index = 0; // Reset the index
      typingTextElement.textContent = ''; // Clear the text content
      typingIndicator.style.display = 'inline-block'; // Ensure the typing indicator is still blinking
      typingInterval = setInterval(typeText, 150); // Restart typing with slower speed (150ms per letter)
    }, 3000); // Delay before restarting typing (adjust as needed)
  }
}

// Start the typing effect at an interval of 150ms (slower speed)
let typingInterval = setInterval(typeText, 300);



  document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".loadout-thumbnail");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeBtn = document.querySelector(".lightbox .close");

    // Open lightbox on thumbnail click
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", (event) => {
        const fullImageUrl = event.target.getAttribute("data-full");
        lightboxImage.src = fullImageUrl; // Set full image URL
        lightbox.classList.add("visible");
      });
    });

    // Close lightbox on close button click
    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("visible");
      lightboxImage.src = ""; // Clear image source
    });

    // Close lightbox on clicking outside the image
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        lightbox.classList.remove("visible");
        lightboxImage.src = ""; // Clear image source
      }
    });
  });


  function setActive (element) {
    let items = document.querySelectorAll('.nav-item');
    items.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
  }