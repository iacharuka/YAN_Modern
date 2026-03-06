document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('footer-container');
    if (!container) return;

    var styleId = 'yan-modern-footer-style';
    if (!document.getElementById(styleId)) {
        var style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .yan-footer {
                margin-top: 3rem;
                border-top: 1px solid rgba(13, 148, 136, 0.12);
                background: linear-gradient(180deg, #f0fdfa 0%, #e6f7f5 100%);
                color: #1a2b3c;
                padding: 3rem 0 1.5rem;
                font-family: 'DM Sans', sans-serif;
            }

            .yan-footer-wrap { width: min(1120px, 92vw); margin: 0 auto; }

            .yan-footer-grid {
                display: grid;
                grid-template-columns: 1.2fr 1fr 1fr;
                gap: 1.5rem;
            }

            .yan-footer h4 {
                margin: 0 0 0.75rem;
                color: #0d9488;
                font-size: 1rem;
                font-weight: 700;
            }

            .yan-footer p, .yan-footer a, .yan-footer li {
                margin: 0;
                color: #5a6b7c;
                text-decoration: none;
                line-height: 1.6;
                font-size: 0.92rem;
            }

            .yan-footer ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 0.45rem; }
            .yan-footer a:hover { color: #0d9488; }

            .yan-footer-logo { height: 52px; margin-bottom: 0.75rem; object-fit: contain; }

            .yan-socials { display: flex; gap: 0.5rem; margin-top: 0.85rem; }
            .yan-socials a {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background: #fff;
                color: #0d9488;
                border: 1px solid rgba(13, 148, 136, 0.2);
                transition: background 180ms, color 180ms;
            }
            .yan-socials a:hover { background: #0d9488; color: #fff; }

            .yan-footer-bottom {
                border-top: 1px solid rgba(13, 148, 136, 0.12);
                margin-top: 1.5rem;
                padding-top: 1rem;
                font-size: 0.82rem;
                color: #7a8a9c;
                text-align: center;
            }

            .yan-float {
                position: fixed;
                right: 20px;
                bottom: 20px;
                z-index: 1001;
                width: 56px;
                height: 56px;
                border-radius: 50%;
                background: linear-gradient(135deg, #0d9488, #0f766e);
                color: #fff;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                font-size: 1.65rem;
                box-shadow: 0 12px 28px rgba(13, 148, 136, 0.4);
                animation: yanPulse 2.4s infinite;
            }
            @keyframes yanPulse {
                0% { transform: scale(1); box-shadow: 0 12px 28px rgba(13, 148, 136, 0.4); }
                70% { transform: scale(1.05); box-shadow: 0 0 0 16px rgba(13, 148, 136, 0); }
                100% { transform: scale(1); box-shadow: 0 12px 28px rgba(13, 148, 136, 0.4); }
            }

            @media (max-width: 900px) { .yan-footer-grid { grid-template-columns: 1fr; } }
        `;
        document.head.appendChild(style);
    }

    var year = new Date().getFullYear();

    container.innerHTML = `
        <footer class="yan-footer">
            <div class="yan-footer-wrap">
                <div class="yan-footer-grid">
                    <section>
                        <a href="index.html"><img class="yan-footer-logo" src="images/logo2.webp" alt="YAN Travel" /></a>
                        <p>Reliable Sri Lanka transport and tours with friendly local drivers and fast WhatsApp support.</p>
                        <div class="yan-socials">
                            <a href="https://web.facebook.com/profile.php?id=61581866861276" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/yan_travel_srilanka/" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                            <a href="https://wa.me/94703577490" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                        </div>
                    </section>

                    <section>
                        <h4>Explore</h4>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="index.html#tours">Trending Tours</a></li>
                            <li><a href="fleet.html">Fleet</a></li>
                            <li><a href="activities.html">Activities</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </section>

                    <section>
                        <h4>Contact</h4>
                        <ul>
                            <li><i class="fas fa-phone"></i> 070 357 7490</li>
                            <li><i class="fas fa-envelope"></i> yantravelofficial@gmail.com</li>
                            <li><i class="fas fa-location-dot"></i> Colombo, Sri Lanka</li>
                            <li><a href="https://wa.me/94703577490">Open WhatsApp Chat</a></li>
                        </ul>
                    </section>
                </div>

                <div class="yan-footer-bottom">&copy; ${year} YAN Travel Sri Lanka. All rights reserved.</div>
            </div>
        </footer>

        <a class="yan-float" href="https://wa.me/94703577490?text=Hi YAN Travel, I would like to ask about bookings." aria-label="WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>
    `;
});
