document.getElementById('exploreBtn').addEventListener('click', () => {
  document.getElementById('destinasi').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('newsletterForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Terima kasih! Email Anda telah terdaftar.');
  this.reset();
});

document.addEventListener("DOMContentLoaded", function() {
  const faders = document.querySelectorAll(".fade-in-section");

  const appearOptions = {
    threshold: 0.2
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      } else {
        entry.target.classList.remove("is-visible");
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});