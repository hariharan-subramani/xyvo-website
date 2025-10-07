// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

// Form submission (contact)
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const action = form.getAttribute("action");
    try {
      const res = await fetch(action, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (res.ok) { alert("Thanks! Message sent."); form.reset(); }
      else { alert("Could not send. Please use the email button."); }
    } catch (err) {
      alert("Network issue. Please try again or use email.");
    }
  });
}
