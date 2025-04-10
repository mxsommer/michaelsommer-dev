// Real-time Clock
const clock = document.getElementById("clock");
const { DateTime } = luxon;

setInterval(() => {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  clock.textContent = now;
}, 1000);

// GSAP Animations
window.addEventListener("load", () => {
  gsap.from(".domain-title", { opacity: 0, y: -50, duration: 1.5 });
  gsap.from(".card", { opacity: 0, y: 50, stagger: 0.3, delay: 0.5 });
});

// Contact Form Submit
document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const status = document.getElementById("form-status");

  const response = await fetch("/contact", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    status.textContent = "Message sent successfully!";
    form.reset();
  } else {
    status.textContent = "Failed to send. Please try again.";
  }
});