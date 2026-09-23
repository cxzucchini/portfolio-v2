//<!-- INTERACTIVE JAVASCRIPT LOGIC -->
// 1. Dynamic Footer Year
document.getElementById('footer-year').textContent = new Date().getFullYear();

// 2. Dynamic Typing Effect for Hero Mindset Quote
const typingText = `"I love fixing things, creating things, and have a great time."`;
const typingEl = document.getElementById('typing-text');
let charIndex = 0;

function typeWriter() {
    if (charIndex < typingText.length) {
        typingEl.innerHTML += typingText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 40);
    }
}
setTimeout(typeWriter, 800);

// 3. 3D Tilt Effect on Cards & Profile Image
const tiltElements = document.querySelectorAll('.tilt-element');

tiltElements.forEach(el => {
    const wrapper = el.querySelector('.tilt-wrapper');
    if (!wrapper) return;

    el.addEventListener('mousemove', (e) => {
        wrapper.classList.remove('resetting');

        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;

        wrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    el.addEventListener('mouseleave', () => {
        wrapper.classList.add('resetting');
        wrapper.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
});

// 4. Scroll Reveal Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 5. Navbar Scroll Shadow Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg', 'shadow-black/50');
    } else {
        navbar.classList.remove('shadow-lg', 'shadow-black/50');
    }
});

// 6. Mobile Menu Toggle Logic
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

