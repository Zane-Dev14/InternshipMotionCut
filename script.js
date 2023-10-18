document.addEventListener("DOMContentLoaded", function () {
  // Get references to the link elements
  const homeLink = document.getElementById("home-link");
  const aboutLink = document.getElementById("about-link");
  const portfolioLink = document.getElementById("portfolio-link");
  const contactLink = document.getElementById("contact-link");

  // Add click event listeners to the links
  homeLink.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default link behavior
    window.location.href = "home.html"; // Navigate to the specified page
  });

  aboutLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "about.html";
  });

  portfolioLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "portfolio.html";
  });

  contactLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "contact.html";
  });
});
