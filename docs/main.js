// Typewriter effect with Tailwind CSS
// This script creates a typewriter effect for a set of texts with a gradient color animation using Tailwind CSS.
// It cycles through the texts, typing them out one letter at a time, and deletes them before moving to the next one.
// The text is styled with a gradient using Tailwind's utility classes.
const texts = ["Web Designer.", "Web Developer.", "UI/UX Designer.", "Freelancer.", "Content Writer.", "Tech Enthusiast.", "SEO Expert.", "Digital Marketer.", "Software Engineer.", "Creative Thinker.", "Problem Solver.", "Innovative Mind.", "Tech Innovator.", "Full Stack Developer.", "Data Scientist.", "Cloud Architect.", "Cybersecurity Specialist.", "Mobile App Developer.", "Game Developer.", "Blockchain Developer.", "AI/ML Engineer.", "DevOps Engineer.", "Systems Analyst.", "Network Administrator.", "Database Administrator.", "IT Consultant.", "Technical Writer.", "Project Manager.", "Business Analyst.", "Product Manager."];
  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';
  let isDeleting = false;
  const speed = 100;

  function type() {
    const element = document.getElementById("typewriter");

    if (count === texts.length) count = 0;

    currentText = texts[count];

    if (isDeleting) {
      letter = currentText.slice(0, --index);
    } else {
      letter = currentText.slice(0, ++index);
    }

    // Inject text with span to apply gradient styling
    element.innerHTML = `<span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">${letter}</span>`;

    if (!isDeleting && letter.length === currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && letter.length === 0) {
      isDeleting = false;
      count++;
      setTimeout(type, 400);
    } else {
      setTimeout(type, speed);
    }
  }

  document.addEventListener("DOMContentLoaded", type);

// Progress bar animation
  document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach((bar) => {
      const percent = parseInt(bar.getAttribute("data-percent"), 10);
      let width = 0;

      const interval = setInterval(() => {
        if (width >= percent) {
          clearInterval(interval);
        } else {
          width++;
          bar.style.width = width + "%";

          // Update text if available
          const textSpan = document.getElementById(bar.id.replace("-bar", "-percent"));
          if (textSpan) textSpan.innerText = width + "%";
        }
      }, 15); // Adjust speed here (smaller = faster)
    });
  });





//feather = require('feather-icons');
feather.replace();



