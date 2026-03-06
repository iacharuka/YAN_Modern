document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('navbar-container');
    if (!container) return;

    var styleId = 'yan-modern-navbar-style';
    if (!document.getElementById(styleId)) {
        var style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .yan-navbar {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 1000;
                padding: 0.85rem 0;
                transition: background 220ms ease, border-color 220ms ease, backdrop-filter 220ms ease, box-shadow 220ms ease;
                border-bottom: 1px solid transparent;
            }

            .yan-navbar:not(.scrolled) .yan-links a,
            .yan-navbar:not(.scrolled) .yan-mobile-toggle { color: #fff; }
            .yan-navbar:not(.scrolled) .yan-logo img { filter: brightness(0) invert(1); }

            .yan-navbar.scrolled {
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(12px);
                border-bottom-color: rgba(13, 148, 136, 0.12);
                box-shadow: 0 4px 20px rgba(13, 148, 136, 0.08);
            }
            .yan-navbar.scrolled .yan-links a { color: #1a2b3c; }
            .yan-navbar.scrolled .yan-links a:hover { color: #0d9488; }
            .yan-navbar.scrolled .yan-mobile-toggle { color: #1a2b3c; }
            .yan-navbar.scrolled .yan-logo img { filter: none; }
            .yan-navbar.scrolled .yan-cta { background: linear-gradient(135deg, #0d9488, #0f766e); color: #fff; border-color: transparent; }

            .yan-nav-wrap {
                width: min(1120px, 92vw);
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
            }

            .yan-logo img { height: 48px; width: auto; object-fit: contain; transition: filter 220ms ease; }

            .yan-links { display: flex; align-items: center; gap: 1.1rem; }

            .yan-links a {
                color: #1a2b3c;
                text-decoration: none;
                font-family: 'DM Sans', sans-serif;
                font-size: 0.9rem;
                font-weight: 600;
                transition: color 180ms ease;
            }
            .yan-links a:hover { color: #0d9488; }

            .yan-cta {
                padding: 0.5rem 1rem;
                border-radius: 12px;
                background: linear-gradient(135deg, #0d9488, #0f766e);
                color: #fff;
                font-weight: 700;
                transition: opacity 180ms ease;
            }
            .yan-cta:hover { opacity: 0.95; }

            .yan-mobile-toggle {
                display: none;
                border: 1px solid rgba(0,0,0,0.12);
                background: rgba(255,255,255,0.9);
                color: #1a2b3c;
                border-radius: 12px;
                padding: 0.45rem 0.65rem;
                font-size: 1rem;
            }

            .yan-mobile-menu {
                display: none;
                width: min(1120px, 92vw);
                margin: 0.5rem auto 0;
                border: 1px solid rgba(13, 148, 136, 0.15);
                border-radius: 16px;
                padding: 0.75rem;
                background: #fff;
                box-shadow: 0 12px 32px rgba(13, 148, 136, 0.12);
            }
            .yan-mobile-menu a {
                display: block;
                text-decoration: none;
                color: #1a2b3c;
                font-family: 'DM Sans', sans-serif;
                font-weight: 600;
                padding: 0.7rem 0.75rem;
                border-radius: 10px;
                font-size: 0.9rem;
            }
            .yan-mobile-menu a:hover { background: rgba(13, 148, 136, 0.08); color: #0d9488; }
            .yan-mobile-menu.show { display: block; }

            @media (max-width: 900px) {
                .yan-links { display: none; }
                .yan-mobile-toggle { display: inline-flex; align-items: center; justify-content: center; }
                .yan-logo img { height: 42px; }
            }
        `;
        document.head.appendChild(style);
    }

    container.innerHTML = `
        <nav class="yan-navbar" id="yan-navbar">
            <div class="yan-nav-wrap">
                <a href="index.html" class="yan-logo" aria-label="YanTravels Home">
                    <img src="images/logo2.webp" alt="YanTravels" />
                </a>

                <div class="yan-links">
                    <a href="index.html">Home</a>
                    <a href="index.html#tours">Tours</a>
                    <a href="fleet.html">Fleet</a>
                    <a href="activities.html">Activities</a>
                    <a href="about.html">About</a>
                    <a href="contact.html">Contact</a>
                    <a href="https://wa.me/94703577490" class="yan-cta"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                </div>

                <button class="yan-mobile-toggle" id="yan-mobile-toggle" aria-label="Open navigation menu">
                    <i class="fas fa-bars"></i>
                </button>
            </div>

            <div class="yan-mobile-menu" id="yan-mobile-menu">
                <a href="index.html">Home</a>
                <a href="index.html#tours">Tours</a>
                <a href="fleet.html">Fleet</a>
                <a href="activities.html">Activities</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
                <a href="https://wa.me/94703577490"><i class="fab fa-whatsapp"></i> WhatsApp</a>
            </div>
        </nav>
    `;

    var navbar = document.getElementById('yan-navbar');
    var toggle = document.getElementById('yan-mobile-toggle');
    var mobileMenu = document.getElementById('yan-mobile-menu');

    function updateNavbarState() {
        if (window.scrollY > 14) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    }

    updateNavbarState();
    window.addEventListener('scroll', updateNavbarState);

    if (toggle && mobileMenu) {
        toggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('show');
        });
    }
});
