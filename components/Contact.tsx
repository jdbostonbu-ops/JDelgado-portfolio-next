"use client";

import { FormEvent, useState } from "react";
import Reveal from "./Reveal";

const WEB3FORMS_ACCESS_KEY = "83f5906c-e58f-47e7-aa6a-30a8d2b8af6d";

export default function Contact() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New portfolio contact form message");
    formData.append("from_name", "Jacqueline Delgado Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error("Submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Reveal id="contact" className="section section--gradient contact-section">
      <div className="section-head contact-head">
        <span className="eyebrow mono">{"// Let’s build something useful"}</span>
        <h2 className="section-title">Have a project in mind?</h2>
        <p className="section-subtitle">
          Tell me what you&apos;re working on and I&apos;ll get back to you.
        </p>
      </div>

      <div className={`contact-card${isRevealed ? " is-flipped" : ""}`}>
        <div className="contact-card-inner">
          <div
            className="contact-card-face contact-invitation"
            aria-hidden={isRevealed}
          >
            <span className="contact-invitation-icon" aria-hidden="true">✦</span>
            <p className="eyebrow mono">Start a project</p>
            <h3>Let&apos;s make your idea happen.</h3>
            <p>Hum LLC</p>
            <button
              className="button button-yellow"
              type="button"
              onClick={() => setIsRevealed(true)}
              tabIndex={isRevealed ? -1 : 0}
            >
              Open contact form
              <span className="contact-turn-arrow" aria-hidden="true">↻</span>
            </button>
          </div>

          <form
            className={`contact-form contact-card-face${status === "success" ? " is-complete" : ""}`}
            onSubmit={onSubmit}
            aria-hidden={!isRevealed}
          >
            {status === "success" ? (
              <div className="contact-success" role="status" aria-live="polite">
                <span className="contact-success-mark" aria-hidden="true">✓</span>
                <p className="eyebrow mono">Message received</p>
                <h3>Thank you for reaching out.</h3>
                <p>Your message is on its way. I&apos;ll be in touch soon.</p>
                <button
                  className="button button--blue"
                  type="button"
                  onClick={() => setStatus("idle")}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="contact-form-heading">
                  <p className="eyebrow mono">Your turn</p>
                  <h3>Tell me about your project.</h3>
                </div>

                <input type="checkbox" name="botcheck" className="contact-botcheck" />

                <div className="contact-field">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    tabIndex={isRevealed ? undefined : -1}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    tabIndex={isRevealed ? undefined : -1}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-phone">Phone number</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="Your phone number"
                    tabIndex={isRevealed ? undefined : -1}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-business-type">Business type</label>
                  <input
                    id="contact-business-type"
                    name="business_type"
                    type="text"
                    autoComplete="organization-title"
                    placeholder="For example: restaurant, nonprofit, or consulting"
                    tabIndex={isRevealed ? undefined : -1}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">
                    Tell me about your project and timeline
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Share a few details about your goals and ideal timeline..."
                    rows={6}
                    tabIndex={isRevealed ? undefined : -1}
                    required
                  />
                </div>

                <button
                  className="button button--blue contact-submit"
                  type="submit"
                  disabled={status === "sending"}
                  tabIndex={isRevealed ? undefined : -1}
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>

                <p className="contact-status" role="status" aria-live="polite">
                  {status === "error"
                    ? "Something went wrong. Please try again in a moment."
                    : ""}
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </Reveal>
  );
}
