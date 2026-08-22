"use client";

import { FormEvent, FormEventHandler, useRef, useState } from "react";

const WEB3FORMS_ACCESS_KEY = "83f5906c-e58f-47e7-aa6a-30a8d2b8af6d";
const FALLBACK_EMAIL = "hum@jacquelinedelgado.com";
const SUBJECT = "Narley — Account Removal Request";

type SubmissionState = "idle" | "sending" | "success" | "error";
type FieldName = "organization" | "contact_person" | "phone" | "email" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

export default function PrivacyContactForm() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resizeTextarea: FormEventHandler<HTMLTextAreaElement> = (event) => {
    const textarea = event.currentTarget;
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 640)}px`;
  };

  const validate = (form: HTMLFormElement) => {
    const nextErrors: FieldErrors = {};
    const fields = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        "input:not([type='hidden']):not([name='botcheck']), textarea"
      )
    );

    fields.forEach((field) => {
      if (!field.validity.valid) {
        nextErrors[field.name as FieldName] = field.validationMessage;
      }
    });

    setErrors(nextErrors);
    const firstInvalid = fields.find((field) => !field.validity.valid);
    firstInvalid?.focus();
    return !firstInvalid;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!validate(form)) return;

    setSubmissionState("sending");
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("from_name", "Narley Privacy Page");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || !result.success) throw new Error("Submission failed");

      form.reset();
      setErrors({});
      setSubmissionState("success");
      if (textareaRef.current) textareaRef.current.style.height = "auto";
    } catch {
      setSubmissionState("error");
    }
  };

  const fieldProps = (name: FieldName) => ({
    "aria-describedby": errors[name] ? `privacy-contact-${name}-error` : undefined,
    "aria-invalid": errors[name] ? (true as const) : undefined,
    onInvalid: (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      event.preventDefault();
    },
  });

  return (
    <section className="privacy-contact" aria-labelledby="privacy-contact-title">
      <div className={`privacy-contact-card${isFlipped ? " is-flipped" : ""}`}>
        <div className="privacy-contact-card-inner">
          <div
            className="privacy-contact-face privacy-contact-invitation"
            aria-hidden={isFlipped}
            inert={isFlipped}
          >
            <p className="eyebrow mono">Account support</p>
            <h2 id="privacy-contact-title">Need help with your Narley account?</h2>
            <p>Send an account removal request or ask a privacy question.</p>
            <button
              className="button button--yellow"
              type="button"
              onClick={() => setIsFlipped(true)}
            >
              Open contact form
              <span className="contact-turn-arrow" aria-hidden="true">↻</span>
            </button>
          </div>

          <form
            className="privacy-contact-face privacy-contact-form"
            onSubmit={onSubmit}
            noValidate
            aria-hidden={!isFlipped}
            inert={!isFlipped}
          >
            <div className="provider-form-heading">
              <p className="eyebrow mono">Account removal request</p>
              <h3>Tell us how we can help.</h3>
            </div>

            <input type="hidden" name="subject" value={SUBJECT} />
            <input
              type="checkbox"
              name="botcheck"
              className="contact-botcheck"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="provider-field">
              <label htmlFor="privacy-contact-organization">Organization name</label>
              <input id="privacy-contact-organization" name="organization" type="text" autoComplete="organization" required {...fieldProps("organization")} />
              {errors.organization && <p className="privacy-field-error" id="privacy-contact-organization-error" role="alert">{errors.organization}</p>}
            </div>

            <div className="provider-field">
              <label htmlFor="privacy-contact-person">Contact person</label>
              <input id="privacy-contact-person" name="contact_person" type="text" autoComplete="name" required {...fieldProps("contact_person")} />
              {errors.contact_person && <p className="privacy-field-error" id="privacy-contact-contact_person-error" role="alert">{errors.contact_person}</p>}
            </div>

            <div className="provider-field">
              <label htmlFor="privacy-contact-phone">Phone number <span>(optional)</span></label>
              <input id="privacy-contact-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" {...fieldProps("phone")} />
              {errors.phone && <p className="privacy-field-error" id="privacy-contact-phone-error" role="alert">{errors.phone}</p>}
            </div>

            <div className="provider-field">
              <label htmlFor="privacy-contact-email">Organization email</label>
              <input id="privacy-contact-email" name="email" type="email" autoComplete="email" inputMode="email" required {...fieldProps("email")} />
              {errors.email && <p className="privacy-field-error" id="privacy-contact-email-error" role="alert">{errors.email}</p>}
            </div>

            <div className="provider-field privacy-contact-message">
              <label htmlFor="privacy-contact-message">Message</label>
              <textarea
                ref={textareaRef}
                id="privacy-contact-message"
                name="message"
                rows={6}
                maxLength={500}
                required
                onInput={resizeTextarea}
                {...fieldProps("message")}
              />
              {errors.message && <p className="privacy-field-error" id="privacy-contact-message-error" role="alert">{errors.message}</p>}
            </div>

            <div className="privacy-contact-actions">
              <button className="button button--blue" type="submit" disabled={submissionState === "sending"}>
                {submissionState === "sending" ? "Sending..." : "Send request"}
              </button>
              <button className="button privacy-contact-close" type="button" onClick={() => setIsFlipped(false)}>
                Close form
              </button>
            </div>

            <div className="privacy-contact-status" role="status" aria-live="polite">
              {submissionState === "success" && <p>Thank you. Your request has been received.</p>}
              {submissionState === "error" && (
                <p>We could not send your request. Email us at <a href={`mailto:${FALLBACK_EMAIL}`}>{FALLBACK_EMAIL}</a>.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
