import "./contact.css";

export function Contact() {
  return (
    <div>
      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <form action="#">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}