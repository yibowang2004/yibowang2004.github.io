// Encode the address in source to deter basic email-harvesting crawlers.
const contactAddress = atob('eWliby53YW5nQGNvbm5lY3QuaGt1Lmhr');

document.querySelectorAll('[data-contact-link]').forEach((link) => {
  link.href = 'mailto:' + contactAddress;
});

document.querySelectorAll('[data-contact-text]').forEach((link) => {
  link.textContent = contactAddress;
});
