// Playtipus site: small progressive enhancements. The page works without this file.

// Footer year
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Email sign-up
const form = document.querySelector("[data-signup]");
const status = document.querySelector("[data-status]");

if (form && status) {
  const say = (msg, isError) => {
    status.textContent = msg;
    status.classList.toggle("is-error", !!isError);
  };

  form.addEventListener("submit", (event) => {
    const email = form.elements.email;

    if (!email.value || !email.checkValidity()) {
      event.preventDefault();
      say("Please enter a valid email address.", true);
      email.focus();
      return;
    }

    // Spam trap filled in: quietly pretend it worked.
    if (form.elements.website && form.elements.website.value) {
      event.preventDefault();
      say("Thanks! You're on the list.");
      return;
    }

    // No email provider set yet (form action is empty).
    if (!form.getAttribute("action")) {
      event.preventDefault();
      say("Sign-ups open very soon. Please check back!", true);
      return;
    }

    // Otherwise the form posts to the provider as normal.
  });
}
