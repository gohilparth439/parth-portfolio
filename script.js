/**
 * Portfolio JavaScript - Gohil Parth Arvindbhai
 * Features:
 * - Animated Typing Text Effect
 * - Sticky Navbar with Scroll Progress Bar
 * - Mobile Menu Toggle with Backdrop
 * - Active Section Highlighting
 * - Scroll Reveal Animations (IntersectionObserver)
 * - Scroll To Top Button
 * - 1-Click Email Copy to Clipboard
 * - Client-Side Mailto Form Composer
 * - Dynamic Copyright Year
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. DYNAMIC CURRENT YEAR ---
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // --- 2. ANIMATED TYPING TEXT ---
  const typedTextElement = document.getElementById('typed-text');
  const phrases = [
    'IT Engineering Student',
    'Aspiring AI/ML Engineer',
    'Future Software Developer'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 90;
  const deletingSpeed = 45;
  const pauseTime = 1800;

  function typeEffect() {
    if (!typedTextElement) return;

    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Finished typing full word
      delay = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting word
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 400;
    }

    setTimeout(typeEffect, delay);
  }

  typeEffect();

  // --- 3. STICKY NAVBAR & SCROLL PROGRESS BAR ---
  const navbar = document.getElementById('navbar');
  const progressBar = document.getElementById('scroll-progress-bar');
  const scrollToTopBtn = document.getElementById('scroll-to-top');

  function handleScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Update progress bar
    if (progressBar && docHeight > 0) {
      const scrollPercent = (scrollY / docHeight) * 100;
      progressBar.style.width = `${scrollPercent}%`;
    }

    // Sticky navbar backdrop
    if (navbar) {
      if (scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Scroll to top button visibility
    if (scrollToTopBtn) {
      if (scrollY > 350) {
        scrollToTopBtn.classList.add('is-visible');
      } else {
        scrollToTopBtn.classList.remove('is-visible');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // --- 4. SCROLL TO TOP ACTION ---
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- 5. MOBILE MENU TOGGLE ---
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const mobileBackdrop = document.getElementById('mobile-backdrop');
  const navLinks = document.querySelectorAll('.nav-link');

  function toggleMobileMenu(isOpen) {
    const shouldOpen = typeof isOpen === 'boolean' ? isOpen : !navMenu.classList.contains('is-active');
    
    if (shouldOpen) {
      hamburgerBtn.classList.add('is-active');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      navMenu.classList.add('is-active');
      mobileBackdrop.classList.add('is-active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      hamburgerBtn.classList.remove('is-active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-active');
      mobileBackdrop.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => toggleMobileMenu());
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', () => toggleMobileMenu(false));
  }

  // Close mobile menu when a nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileMenu(false);
    });
  });

  // --- 6. ACTIVE SECTION NAVIGATION HIGHLIGHTING ---
  const sections = document.querySelectorAll('section[id]');

  function highlightActiveNav() {
    const scrollY = window.pageYOffset + 120; // Offset for header

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (targetNavLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          targetNavLink.classList.add('active');
        } else {
          targetNavLink.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', highlightActiveNav, { passive: true });
  highlightActiveNav();

  // --- 7. SCROLL REVEAL (IntersectionObserver) ---
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target); // Reveal only once for performance
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // --- 8. COPY EMAIL TO CLIPBOARD ---
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyBtnText = document.getElementById('copy-btn-text');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = copyEmailBtn.getAttribute('data-email') || 'parthgohil3191@gmail.com';
      
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback
          const textArea = document.createElement('textarea');
          textArea.value = email;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }

        if (copyBtnText) {
          const originalText = copyBtnText.textContent;
          copyBtnText.textContent = '✓ Copied!';
          copyEmailBtn.style.borderColor = 'var(--accent-emerald)';
          copyEmailBtn.style.color = 'var(--accent-emerald)';

          setTimeout(() => {
            copyBtnText.textContent = originalText;
            copyEmailBtn.style.borderColor = '';
            copyEmailBtn.style.color = '';
          }, 2400);
        }
      } catch (err) {
        console.error('Failed to copy email: ', err);
        if (copyBtnText) copyBtnText.textContent = 'parthgohil3191@gmail.com';
      }
    });
  }

  // --- 9. CLIENT-SIDE CONTACT FORM (MAILTO COMPOSER) ---
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('sender-name');
      const subjectInput = document.getElementById('sender-subject');
      const messageInput = document.getElementById('sender-message');

      const name = nameInput ? nameInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !subject || !message) {
        if (formFeedback) {
          formFeedback.textContent = 'Please fill out all fields before sending.';
          formFeedback.className = 'form-feedback error';
        }
        return;
      }

      // Build structured email body
      const emailRecipient = 'parthgohil3191@gmail.com';
      const formattedSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name}`);
      const formattedBody = encodeURIComponent(
        `Hi Parth,\n\n${message}\n\nBest regards,\n${name}`
      );

      // Trigger mail client
      const mailtoUrl = `mailto:${emailRecipient}?subject=${formattedSubject}&body=${formattedBody}`;
      window.location.href = mailtoUrl;

      // Provide visible user feedback
      if (formFeedback) {
        formFeedback.textContent = '✓ Opening your email application with the drafted message...';
        formFeedback.className = 'form-feedback success';

        setTimeout(() => {
          formFeedback.textContent = '';
          formFeedback.className = 'form-feedback';
          contactForm.reset();
        }, 5000);
      }
    });
  }

});
