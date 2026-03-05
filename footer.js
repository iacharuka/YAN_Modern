document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('footer-container');
    if (!container) return;

    var styleId = 'yan-modern-footer-style';
    if (!document.getElementById(styleId)) {
        var style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .yan-footer {
                margin-top: 2rem;
                border-top: 1px solid rgba(103, 232, 249, 0.25);
                background:
                    radial-gradient(circle at 20% 0, rgba(34, 197, 94, 0.1), transparent 42%),
                    radial-gradient(circle at 82% 18%, rgba(124, 58, 237, 0.12), transparent 45%),
                    #050814;
                color: #e2e8f0;
                padding: 3rem 0 1.4rem;
                font-family: 'Space Grotesk', sans-serif;
            }

            .yan-footer-wrap {
                width: min(1120px, 92vw);
                margin: 0 auto;
            }

            .yan-footer-grid {
                display: grid;
                grid-template-columns: 1.2fr 1fr 1fr;
                gap: 1.4rem;
            }

            .yan-footer h4 {
                margin: 0 0 0.7rem;
                color: #67e8f9;
                font-size: 1rem;
            }

            .yan-footer p,
            .yan-footer a,
            .yan-footer li {
                margin: 0;
                color: #cbd5e1;
                text-decoration: none;
                line-height: 1.6;
                font-size: 0.92rem;
            }

            .yan-footer ul {
                list-style: none;
                margin: 0;
                padding: 0;
                display: grid;
                gap: 0.4rem;
            }

            .yan-footer a:hover { color: #67e8f9; }

            .yan-footer-logo {
                height: 56px;
                margin-bottom: 0.7rem;
            }

            .yan-socials {
                display: flex;
                gap: 0.55rem;
                margin-top: 0.8rem;
            }

            .yan-socials a {
                width: 34px;
                height: 34px;
                border-radius: 999px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background: rgba(255, 255, 255, 0.1);
            }

            .yan-footer-bottom {
                border-top: 1px solid rgba(255, 255, 255, 0.14);
                margin-top: 1.25rem;
                padding-top: 0.9rem;
                font-size: 0.8rem;
                color: #9fb1d6;
                text-align: center;
            }

            .yan-float {
                position: fixed;
                right: 18px;
                bottom: 18px;
                z-index: 1001;
                width: 56px;
                height: 56px;
                border-radius: 50%;
                background: linear-gradient(135deg, #22c55e, #16a34a);
                color: #fff;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                font-size: 1.7rem;
                box-shadow: 0 14px 28px rgba(34, 197, 94, 0.4);
                animation: yanPulse 2.4s infinite;
            }

            @keyframes yanPulse {
                0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.45); }
                70% { transform: scale(1.05); box-shadow: 0 0 0 18px rgba(34, 197, 94, 0); }
                100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
            }

            @media (max-width: 900px) {
                .yan-footer-grid { grid-template-columns: 1fr; }
            }
        `;
        document.head.appendChild(style);
    }

    var year = new Date().getFullYear();

    container.innerHTML = `
        <footer class="yan-footer">
            <div class="yan-footer-wrap">
                <div class="yan-footer-grid">
                    <section>
                        <a href="index.html"><img class="yan-footer-logo" src="images/logo2.png" alt="YAN Travel" /></a>
                        <p>Modern Sri Lanka transport and tour planning with reliable drivers, quick support, and clear pricing.</p>
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
