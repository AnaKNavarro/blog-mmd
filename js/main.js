document.addEventListener('DOMContentLoaded', () => {
    // Animate items on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.bento-item').forEach(item => {
        observer.observe(item);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effect for bento items
    document.querySelectorAll('.bento-item').forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            item.style.setProperty('--mouse-x', `${x}px`);
            item.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Dynamic color scheme based on time
    function updateColorScheme() {
        const hour = new Date().getHours();
        const root = document.documentElement;
        
        if (hour >= 6 && hour < 18) {
            // Light mode
            root.style.setProperty('--background-color', '#F2F2F2');
            root.style.setProperty('--text-color', '#060E40');
        } else {
            // Dark mode
            root.style.setProperty('--background-color', '#060E40');
            root.style.setProperty('--text-color', '#F2F2F2');
        }
    }

    updateColorScheme();
    setInterval(updateColorScheme, 60000); // Check every minute

    // Add parallax effect to hero section
    const heroContent = document.querySelector('.hero-content');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Control de la barra de navegación en scroll
    const header = document.querySelector('.header');
    let lastScroll = 0;
    let scrollTimer;

    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimer);

        const currentScroll = window.pageYOffset;
        const scrollDelta = currentScroll - lastScroll;
        
        // No hacemos nada si el scroll es muy pequeño
        if (Math.abs(scrollDelta) < 10) return;

        // Ocultar nav al hacer scroll hacia abajo
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.remove('nav-visible');
            header.classList.add('nav-hidden');
        } 
        // Mostrar nav al hacer scroll hacia arriba
        else if (currentScroll < lastScroll) {
            header.classList.remove('nav-hidden');
            header.classList.add('nav-visible');
        }

        lastScroll = currentScroll;

        // Mostrar nav después de que el usuario deje de hacer scroll
        scrollTimer = setTimeout(() => {
            if (currentScroll < 100) {
                header.classList.remove('nav-hidden');
                header.classList.add('nav-visible');
            }
        }, 150);
    });

    // Asegurarnos de que la nav sea visible al cargar la página
    header.classList.add('nav-visible');

    // Menú hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
