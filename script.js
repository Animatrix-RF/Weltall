window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const rakete = document.querySelector(".rakete");
  
    // Bewege die Rakete vertikal entsprechend dem Scroll
    rakete.style.transform = `translateY(${scrollY * 0.5}px) rotate(${scrollY * 0.1}deg)`;
  });

  const numStars = 100; // Anzahl der Sterne
        const body = document.body;
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            const size = Math.random() * 3 + 1; // Größe der Sterne
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            body.appendChild(star);
        }


        const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    function toggleMenu() {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    }

    hamburger.addEventListener('click', toggleMenu);
    hamburger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
    });
