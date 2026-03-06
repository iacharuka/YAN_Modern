(function () {
    var STYLE_ID = 'yan-booking-component-style';

    function injectStyles() {
        if (document.getElementById(STYLE_ID)) return;

        var style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = `
            .yb-box {
                width: 100%;
                max-width: 100%;
                margin: 0 auto;
                padding: 1.35rem;
                border-radius: 16px;
                border: 1px solid rgba(13, 148, 136, 0.16);
                background:
                    linear-gradient(0deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)),
                    url('images/banner.webp');
                background-size: cover;
                background-position: center;
                box-shadow: 0 4px 20px rgba(13, 148, 136, 0.08);
                transform-style: preserve-3d;
                transition: transform 250ms ease, box-shadow 250ms ease, border-color 250ms ease;
            }

            .yb-box:hover {
                transform: perspective(1000px) rotateX(2deg) rotateY(-3deg) translateY(-3px);
                border-color: rgba(13, 148, 136, 0.45);
                box-shadow: 0 12px 32px rgba(13, 148, 136, 0.14);
            }

            .yb-title {
                margin: 0;
                color: #1a2b3c;
                font-size: clamp(1.25rem, 2.8vw, 1.75rem);
                font-family: 'Outfit', system-ui, -apple-system, Segoe UI, sans-serif;
            }

            .yb-sub {
                margin: 0.45rem 0 0.9rem;
                color: #5a6b7c;
                font-size: 0.98rem;
            }

            .yb-form {
                display: grid;
                gap: 0.85rem;
                font-family: 'DM Sans', system-ui, -apple-system, Segoe UI, sans-serif;
            }

            .yb-form label {
                display: grid;
                gap: 0.28rem;
                font-size: 0.78rem;
                font-weight: 600;
                color: #1a2b3c;
                letter-spacing: 0.05em;
                text-transform: uppercase;
            }

            .yb-form input,
            .yb-form select {
                width: 100%;
                border-radius: 0.62rem;
                border: 1px solid rgba(13, 148, 136, 0.18);
                background: rgba(248, 250, 252, 0.92);
                color: #1a2b3c;
                font-family: inherit;
                font-size: 1rem;
                padding: 0.82rem 0.9rem;
                outline: none;
                transition: border-color 180ms ease, background-color 180ms ease;
            }

            .yb-form input::placeholder { color: rgba(90, 107, 124, 0.85); }

            .yb-form input:focus,
            .yb-form select:focus {
                border-color: #0d9488;
                background: #ffffff;
            }

            .yb-row {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 0.85rem;
            }

            .yb-submit {
                width: 100%;
                border: 0;
                background: linear-gradient(135deg, #0d9488, #0f766e);
                color: #fff;
                font-weight: 700;
                border-radius: 0.65rem;
                padding: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                cursor: pointer;
                margin-top: 0.35rem;
                transition: transform 220ms ease;
                box-shadow: 0 10px 24px rgba(13, 148, 136, 0.28);
            }

            .yb-submit:hover { transform: translateY(-2px); }

            .yb-proof {
                margin-top: 0.85rem;
                border: 1px solid rgba(13, 148, 136, 0.16);
                border-radius: 0.85rem;
                padding: 0.75rem;
                background: rgba(13, 148, 136, 0.06);
                color: #5a6b7c;
                font-size: 0.83rem;
                line-height: 1.5;
            }

            .yb-proof strong {
                color: #0d9488;
                font-weight: 700;
            }

            @media (max-width: 760px) {
                .yb-row { grid-template-columns: 1fr; }
            }
        `;
        document.head.appendChild(style);
    }

    function showError(title, text) {
        if (window.Swal) {
            window.Swal.fire({ icon: 'error', title: title, text: text });
        } else {
            alert(title + ': ' + text);
        }
    }

    function showLoadingAndRedirect(url) {
        if (window.Swal) {
            window.Swal.fire({
                title: 'Opening WhatsApp...',
                timer: 900,
                timerProgressBar: true,
                allowOutsideClick: false,
                showConfirmButton: false,
                didOpen: function () {
                    window.Swal.showLoading();
                }
            });
        }
        setTimeout(function () {
            window.location.href = url;
        }, 900);
    }

    function trackBookingEvent(name, details) {
        var payload = Object.assign({
            event: 'yan_event',
            event_name: name,
            page: 'booking_form',
            timestamp: new Date().toISOString()
        }, details || {});
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(payload);
        if (typeof window.gtag === 'function') {
            window.gtag('event', name, details || {});
        }
    }

    function createMarkup(options) {
        var title = options.title || 'Airport Transfer & Tours';
        var subtitle = options.subtitle || 'Send your request directly to WhatsApp.';
        return (
            '<aside class="yb-box">' +
                '<h2 class="yb-title">' + title + '</h2>' +
                '<p class="yb-sub">' + subtitle + '</p>' +
                '<form class="yb-form" data-yan-booking-form>' +
                    '<label>Trip Type' +
                        '<select required name="tripType">' +
                            '<option value="">Select trip type</option>' +
                            '<option>Airport Transfer</option>' +
                            '<option>Day Tour</option>' +
                            '<option>Multi-day Tour</option>' +
                        '</select>' +
                    '</label>' +
                    '<label>Pickup Location <input required name="pickup" placeholder="Airport / Hotel"></label>' +
                    '<label>Dropoff Location <input required name="dropoff" placeholder="Destination"></label>' +
                    '<div class="yb-row">' +
                        '<label>Date <input required type="date" name="date"></label>' +
                        '<label>Time <input required type="time" name="time"></label>' +
                    '</div>' +
                    '<div class="yb-row">' +
                        '<label>Passengers <input required type="number" min="1" max="20" name="pax" placeholder="1"></label>' +
                        '<label>Vehicle' +
                            '<select required name="vehicle">' +
                                '<option value="">Select</option>' +
                                '<option>Sedan (Prius/Axio)</option>' +
                                '<option>SUV (Vezel)</option>' +
                                '<option>Mini Car (Alto/WagonR/Fit)</option>' +
                                '<option>Mini Van (Avanza)</option>' +
                                '<option>Standard Van (Flat Roof)</option>' +
                                '<option>High Roof Van (KDH)</option>' +
                            '</select>' +
                        '</label>' +
                    '</div>' +
                    '<label>Name <input required name="name" placeholder="Your full name"></label>' +
                    '<label>Phone / WhatsApp <input required type="tel" name="phone" placeholder="+94..."></label>' +
                    '<button type="submit" class="yb-submit"><i class="fab fa-whatsapp"></i> CHECK AVAILABILITY</button>' +
                '</form>' +
                '<div class="yb-proof"><strong>Rated 4.9/5</strong> by recent travelers for on-time pickup, clean vehicles, and friendly local drivers.</div>' +
            '</aside>'
        );
    }

    function mount(targetId, options) {
        var config = options || {};
        var target = document.getElementById(targetId);
        if (!target) return;

        injectStyles();
        target.innerHTML = createMarkup(config);

        var form = target.querySelector('[data-yan-booking-form]');
        if (!form) return;

        var dateInput = form.querySelector('input[name="date"]');
        if (dateInput) {
            var now = new Date();
            var month = String(now.getMonth() + 1).padStart(2, '0');
            var day = String(now.getDate()).padStart(2, '0');
            dateInput.min = now.getFullYear() + '-' + month + '-' + day;
        }

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var formData = new FormData(form);
            var tripType = (formData.get('tripType') || '').toString().trim();
            var pickup = (formData.get('pickup') || '').toString().trim();
            var dropoff = (formData.get('dropoff') || '').toString().trim();
            var date = (formData.get('date') || '').toString().trim();
            var time = (formData.get('time') || '').toString().trim();
            var pax = Number((formData.get('pax') || '').toString().trim());
            var vehicle = (formData.get('vehicle') || '').toString().trim();
            var name = (formData.get('name') || '').toString().trim();
            var phone = (formData.get('phone') || '').toString().trim();
            var cleanedPhone = phone.replace(/\s+/g, '');

            if (!tripType) {
                showError('Missing trip type', 'Please select a trip type.');
                return;
            }
            if (!Number.isInteger(pax) || pax < 1 || pax > 20) {
                showError('Invalid passengers', 'Passengers must be between 1 and 20.');
                return;
            }
            if (!/^(\+94|0)\d{9}$/.test(cleanedPhone)) {
                showError('Invalid phone', 'Use +9470XXXXXXX or 07XXXXXXXX format.');
                return;
            }

            var phoneNumber = '94703577490';
            var pageName = config.page || 'Website';
            var message = [
                '*NEW BOOKING INQUIRY* 🇱🇰',
                '------------------------------',
                '🌐 Source Page: ' + pageName,
                '🚗 Service: ' + tripType,
                '📍 Pickup: ' + pickup,
                '🏁 Dropoff: ' + dropoff,
                '📅 Date: ' + date,
                '⏰ Time: ' + time,
                '👥 Passengers: ' + pax,
                '🚐 Vehicle: ' + vehicle,
                '🙍 Name: ' + name,
                '📱 Contact: ' + cleanedPhone,
                '------------------------------',
                'Please confirm availability and price.'
            ].join('\n');

            trackBookingEvent('booking_form_submitted', {
                trip_type: tripType,
                vehicle: vehicle,
                passengers: pax,
                source_page: pageName
            });
            showLoadingAndRedirect('https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message));
        });
    }

    window.YANBookingForm = { mount: mount };
})();
