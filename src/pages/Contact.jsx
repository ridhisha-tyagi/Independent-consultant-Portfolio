import { useRef } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const location = useLocation();
  const type = new URLSearchParams(location.search).get("type");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5m6dm3d",
      "template_7dx2g4j",
      form.current,
      "HlIi0ld9FX0reGiqm"
    );

    alert("Message sent.");
  };

  return (
    <section className="section-accent">
      <div className="container">
        <div className="section-frame">
          <div className="section-box">

            <h2 className="section-title">
              {type === "problem" && "Tell me about your problem"}
              {type === "diagnostic" && "Start with a diagnostic"}
              {type === "chat" && "Start a conversation"}
            </h2>

            <form ref={form} onSubmit={sendEmail} className="contact-form">

              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                required
              />

              <input
                type="email"
                name="reply_to"
                placeholder="Your email"
                required
              />

              <input
                type="text"
                name="company"
                placeholder="Company / Product"
                required
              />

              <input
                type="text"
                name="role"
                placeholder="Your role (optional)"
              />

              <input type="hidden" name="type" value={type} />

              <textarea
                name="message"
                placeholder="Describe what’s happening..."
                required
              />

              <button className="btn-primary">
                <span>Send →</span>
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
}