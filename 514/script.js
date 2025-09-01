document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const f = id => document.getElementById(id).value.trim();
  const phone = f('phone'), email = f('email'), gender = f('gender');

  if (!/^\d{10}$/.test(phone)) {
    alert("Invalid phone number.");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Invalid email.");
    return;
  }

  if (!gender) {
    alert("Select a gender.");
    return;
  }

  alert("Registration successful!");
  this.reset();
});
