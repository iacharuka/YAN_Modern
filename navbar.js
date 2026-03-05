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
                padding: 0.9rem 0;
                transition: background 220ms ease, border-color 220ms ease, backdrop-filter 220ms ease, box-shadow 220ms ease;
                border-bottom: 1px solid transparent;
            }

            .yan-navbar.scrolled {
                background: rgba(6, 10, 22, 0.72);
                backdrop-filter: blur(12px);
                border-bottom-color: rgba(255, 255, 255, 0.18);
                box-shadow: 0 8px 30px rgba(2, 6, 23, 0.45);
            }

            .yan-nav-wrap {
                width: min(1120px, 92vw);
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
            }

            .yan-logo img {
                height: 52px;
                width: auto;
                object-fit: contain;
            }

            .yan-links {
                display: flex;
                align-items: center;
                gap: 1rem;
            }

            .yan-links a {
                color: #e2e8f0;
                text-decoration: none;
                font-family: 'Space Grotesk', sans-serif;
                font-size: 0.88rem;
                font-weight: 600;
                letter-spacing: 0.08em;
                text-transform: uppercase;
                opacity: 0.92;
            }

            .yan-links a:hover { color: #67e8f9; }

            .yan-cta {
                padding: 0.55rem 0.95rem;
                border-radius: 0.75rem;
                border: 1px solid rgba(34, 211, 238, 0.45);
                background: linear-gradient(130deg, rgba(6, 182, 212, 0.22), rgba(124, 58, 237, 0.24));
            }

            .yan-mobile-toggle {
                display: none;
                border: 1px solid rgba(255, 255, 255, 0.25);
                background: rgba(255, 255, 255, 0.08);
                color: #fff;
                border-radius: 0.65rem;
                padding: 0.4rem 0.6rem;
                font-size: 1rem;
            }

            .yan-mobile-menu {
                display: none;
                width: min(1120px, 92vw);
                margin: 0.65rem auto 0;
                border: 1px solid rgba(255, 255, 255, 0.16);
                border-radius: 0.95rem;
                padding: 0.65rem;
                background: rgba(4, 8, 19, 0.94);
            }

            .yan-mobile-menu a {
                display: block;
                text-decoration: none;
                color: #dbeafe;
                font-family: 'Space Grotesk', sans-serif;
                font-weight: 600;
                padding: 0.68rem 0.7rem;
                border-radius: 0.6rem;
                text-transform: uppercase;
                letter-spacing: 0.07em;
                font-size: 0.82rem;
            }

            .yan-mobile-menu a:hover { background: rgba(103, 232, 249, 0.15); color: #67e8f9; }
            .yan-mobile-menu.show { display: block; }

            @media (max-width: 900px) {
                .yan-links { display: none; }
                .yan-mobile-toggle { display: inline-flex; align-items: center; justify-content: center; }
                .yan-logo img { height: 46px; }
            }
        `;
        document.head.appendChild(style);
    }

    container.innerHTML = `
        <nav class="yan-navbar" id="yan-navbar">
            <div class="yan-nav-wrap">
                <a href="index.html" class="yan-logo" aria-label="YAN Travel Home">
                    <img src="images/logo2.png" alt="YAN Travel" />
                </a>

                <div class="yan-links">
                    <a href="index.html">Home</a>
                    <a href="index.html#tours">Tours</a>
                    <a href="fleet.html">Fleet</a>
                    <a href="activities.html">Activities</a>
                    <a href="about.html">About</a>
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
                <a href="https://wa.me/94703577490"><i class="fab fa-whatsapp"></i> WhatsApp</a>
            </div>
        </nav>
    `;

    var navbar = document.getElementById('yan-navbar');
    var toggle = document.getElementById('yan-mobile-toggle');
    var mobileMenu = document.getElementById('yan-mobile-menu');

    function updateNavbarState() {
        if (window.scrollY > 14) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    updateNavbarState();
    window.addEventListener('scroll', updateNavbarState);

    if (toggle && mobileMenu) {
        toggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('show');
        });
    }
});
