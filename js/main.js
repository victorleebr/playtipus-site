// Playtipus site: small progressive enhancements. The page works without this file.

// Footer year
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Respect "reduce motion": stop the looping videos and let people play them by hand.
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll("video[autoplay]").forEach((video) => {
    video.removeAttribute("autoplay");
    video.pause();
    video.controls = true;
  });
}

// Email sign-up (Buttondown). The form opens Buttondown in a new tab, which
// handles CAPTCHA and sends the confirmation email.
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

    say("Almost there! Check your inbox and click the link to confirm.");
    setTimeout(() => form.reset(), 0);
  });
}
