const form = document.getElementById('feedbackForm');
const localKey = 'feedback-form-state';

form.addEventListener('input', () => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(localKey, JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const savedData = JSON.parse(localStorage.getItem(localKey)) || {};
  const { email, message } = savedData;

  if (!email || !message) {
    alert('All fields must be filled out.');
    return;
  }

  console.log('Submitted Form:', { email, message });
  localStorage.removeItem(localKey);
  form.reset();
});

window.addEventListener('load', () => {
  const savedData = JSON.parse(localStorage.getItem(localKey)) || {};
  form.elements.email.value = savedData.email || '';
  form.elements.message.value = savedData.message || '';
});
