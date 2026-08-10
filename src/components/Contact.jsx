import Reveal from './Reveal.jsx';
import './Contact.css';

const INFO = [
  {
    icon: '📍',
    label: 'Address',
    value:
      '50, Bima Rd, Shiv Shakti Nagar, Nagar Nigam Colony, Dewas, Madhya Pradesh 455001',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 9826527487',
    link: 'tel:+919826527487',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'gyanodaylibrary2025@gmail.com',
    link: 'mailto:gyanodaylibrary2025@gmail.com',
  },
  {
    icon: '🕒',
    label: 'Opening Hours',
    value: '8:00 AM – 11:00 PM • Open 7 Days a Week',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">

        <Reveal as="div" className="section-head">
          <span className="eyebrow">Contact</span>

          <h2>Visit  ज्ञानोदय लाइब्रेरी</h2>

          <p>
            Have a question about the space or facilities?
            Reach out — we're happy to help.
          </p>
        </Reveal>

        <div className="contact__grid">

          {/* LEFT — MAP */}
          <Reveal className="contact__map-wrap" zoom>
            <div className="contact__map contact__map--large">

              <iframe
                title="Gyanodaya Library Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470191.61029518093!2d75.43142368906254!3d22.97334590000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963179c7a942569%3A0xc79acdc669e9cfd5!2sGyanoday%20Library!5e0!3m2!1sen!2sin!4v1783589339054!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />

            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Gyanoday+Library+Dewas+Madhya+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__directions"
            >
              📍 Get Directions
            </a>
          </Reveal>


          {/* RIGHT — CONTACT DETAILS */}
          <Reveal className="contact__info">

            <div className="contact__info-heading">
              <span>Get in touch</span>
              <h3>We're here to help you</h3>
              <p>
                Feel free to contact us for membership, timings,
                facilities or any other information.
              </p>
            </div>

            <ul className="contact__info-list">

              {INFO.map((item) => (
                <li key={item.label}>

                  <span className="contact__info-icon">
                    {item.icon}
                  </span>

                  <div className="contact__info-content">

                    <strong>{item.label}</strong>

                    {item.link ? (
                      <a
                        href={item.link}
                        className="contact__link"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p>{item.value}</p>
                    )}

                  </div>

                </li>
              ))}

            </ul>


            {/* ACTION BUTTONS */}
            <div className="contact__actions">

              <a
                href="tel:+919826527487"
                className="contact__btn contact__btn--call"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/919826527487"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__btn contact__btn--whatsapp"
              >
                💬 WhatsApp
              </a>

            </div>

          </Reveal>

        </div>
      </div>
    </section>
  );
}
