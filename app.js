const year = document.getElementById('year');
const form = document.querySelector('.contact-form');
const message = document.getElementById('form-message');

if (year) {
  year.textContent = new Date().getFullYear();
}

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name')?.toString().trim() || 'Parent';
  message.textContent = `Thanks, ${name}! Our admissions team will contact you within 24 hours.`;
  form.reset();
});
