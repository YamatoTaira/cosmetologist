const form = document.getElementById("bookingForm");
const message = document.getElementById("formSuccess");
const phoneInput = document.getElementById("phoneInput");
const promoTimer = document.getElementById("promoTimer");

let seconds = 86399;
setInterval(() => {
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  promoTimer.textContent = h + ":" + m + ":" + s;
  seconds = seconds > 0 ? seconds - 1 : 86399;
}, 1000);

phoneInput.addEventListener("input", () => {
  const digits = phoneInput.value.replace(/\D/g, "").slice(0, 11);
  const norm = digits.startsWith("7") ? digits : "7" + digits.replace(/^8/, "");
  let out = "+7";
  if (norm.length > 1) out += " (" + norm.slice(1, 4);
  if (norm.length >= 4) out += ") " + norm.slice(4, 7);
  if (norm.length >= 7) out += "-" + norm.slice(7, 9);
  if (norm.length >= 9) out += "-" + norm.slice(9, 11);
  phoneInput.value = out;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "Спасибо! Заявка отправлена. Свяжемся с вами в течение 10 минут.";
  form.reset();
});
