tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      },
    },
  },
};

// Dark mode toggle function
function toggleDarkMode() {
  const html = document.documentElement;
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

// Set initial theme based on user preference or system preference
document.addEventListener('DOMContentLoaded', () => {
  const userTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (userTheme === 'dark' || (!userTheme && systemTheme)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

document.querySelectorAll('a.smooth-link').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

var typed = new Typed('#element', {
  strings: ['creating beautiful websites,', 'creating functional websites,', 'and editing video.'],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

const parallaxElements = document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {
  parallaxElements.forEach((el, index) => {
    const speed = index % 2 === 0 ? 0.3 : 0.6; // Set different speed for each section
    el.style.transform = `translateY(${window.scrollY * speed}px)`;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  // Scroll event listener
  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      // Menggunakan scrollY sebagai pengganti pageYOffset
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    // Tambahkan dan hapus kelas 'active'
    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Click event listener
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      // Scroll ke bagian yang dituju dengan smooth scrolling
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // Tambahkan kelas 'active' ke link yang diklik
      navLinks.forEach((nav) => nav.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
