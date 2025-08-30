// Animated typing effect for 'Frontend Developer'
const animatedText = document.querySelector('.animated-text');
const words = ['Frontend Developer', 'Programmer', 'Web Designer'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const word = words[wordIndex];
    if (isDeleting) {
        charIndex--;
        animatedText.innerHTML = word.substring(0, charIndex);
    } else {
        charIndex++;
        animatedText.innerHTML = word.substring(0, charIndex);
    }
    if (!isDeleting && charIndex === word.length) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 300);
    } else {
        setTimeout(type, isDeleting ? 60 : 120);
    }
}
type();
// Animate circular professional skills
document.querySelectorAll('.circular-progress').forEach(circle => {
  let percent = parseInt(circle.getAttribute('data-percent'));
  let current = 0;
  let valueElem = circle.querySelector('.value');
  let angle = 0;
  
  function animate() {
    if (current <= percent) {
      valueElem.textContent = current + '%';
      angle = (current / 100) * 360;
      circle.style.background = `conic-gradient(#13e8ff ${angle}deg, #7F5EFF ${angle}deg, #202a39 0deg 360deg)`;
      current++;
      setTimeout(animate, 16);
    }
  }
  animate();
});

// Smooth nav highlight on scroll
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let current = 'home';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you for contacting me! (Functionality can be extended with backend integration.)');
  this.reset();
});