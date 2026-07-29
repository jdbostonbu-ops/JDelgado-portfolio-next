"use client";

import { FormEvent, useRef, useState } from "react";
import Reveal from "./Reveal";

const WEB3FORMS_ACCESS_KEY = "83f5906c-e58f-47e7-aa6a-30a8d2b8af6d";

type SubmissionState = "idle" | "sending" | "success" | "error";

const createStatusWriter =
  (element: HTMLParagraphElement | null) => (message: string) => {
    if (element) {
      element.textContent = message;
    }
  };

export default function ProviderInterestForm() {
  const statusRef = useRef<HTMLParagraphElement>(null);
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const writeStatus = createStatusWriter(statusRef.current);

    setSubmissionState("sending");
    writeStatus("Sending your provider application...");

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append(
      "subject",
      "New Narley Provider app vetted provider application"
    );
    formData.append("from_name", "Narley Provider Interest Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setSubmissionState("success");
      writeStatus(
        "Thank you. Your provider application has been received for review."
      );
    } catch {
      setSubmissionState("error");
      writeStatus(
        "We could not send your application. Please try again in a moment."
      );
    }
  };

  return (
    <Reveal
      id="provider-interest"
      className="section provider-interest-section"
    >
      <div className="provider-interest-shell">
        <div className="provider-interest-intro">
          <p className="eyebrow mono">Narley Community Intelligence Network</p>
          <h2 className="section-title">
            Interested in being a provider for the Narley Provider Community Resource app?
          </h2>
          <p className="provider-interest-lead">
            Complete the form. We&apos;ll use these details to begin the
            provider review process and follow up with your organization.
          </p>

          <div className="provider-interest-note">
            <span aria-hidden="true">✓</span>
            <p>
              Share the best contact and mailing information for your
              organization.
            </p>
          </div>

          <a className="provider-privacy-link" href="/privacy">
            Read the Narley Privacy Policy <span aria-hidden="true">→</span>
          </a>
          <p className="provider-privacy-note">
            This policy covers both the Narley Community Resource Reader and Provider mobile apps.
          </p>
        </div>

        <form className="provider-form" onSubmit={onSubmit}>
          <div className="provider-form-heading">
            <p className="eyebrow mono">Provider details</p>
            <h3>Tell us about your organization.</h3>
          </div>

          <input
            type="checkbox"
            name="botcheck"
            className="contact-botcheck"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="provider-field provider-field--full">
            <label htmlFor="provider-organization">Organization</label>
            <input
              id="provider-organization"
              name="organization"
              type="text"
              autoComplete="organization"
              placeholder="Organization name"
              required
            />
          </div>

          <div className="provider-field provider-field--full">
            <label htmlFor="provider-website">Website</label>
            <input
              id="provider-website"
              name="website"
              type="url"
              autoComplete="url"
              inputMode="url"
              placeholder="https://organization.org"
            />
          </div>

          <div className="provider-field provider-field--full">
            <label htmlFor="provider-contact-person">Contact person</label>
            <input
              id="provider-contact-person"
              name="contact_person"
              type="text"
              autoComplete="name"
              placeholder="Full name"
              required
            />
          </div>

          <div className="provider-field">
            <label htmlFor="provider-phone">Phone number</label>
            <input
              id="provider-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="(555) 555-5555"
              required
            />
          </div>

          <div className="provider-field">
            <label htmlFor="provider-email">Email address</label>
            <input
              id="provider-email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="contact@organization.org"
              required
            />
          </div>

          <fieldset className="provider-address">
            <legend>
              <span className="mono">Mailing address</span>
            </legend>

            <div className="provider-address-grid">
              <div className="provider-field provider-field--full">
                <label htmlFor="provider-address-1">Address 1</label>
                <input
                  id="provider-address-1"
                  name="address_1"
                  type="text"
                  autoComplete="address-line1"
                  placeholder="Street address"
                  required
                />
              </div>

              <div className="provider-field provider-field--full">
                <label htmlFor="provider-address-2">
                  Address 2 <span>(optional)</span>
                </label>
                <input
                  id="provider-address-2"
                  name="address_2"
                  type="text"
                  autoComplete="address-line2"
                  placeholder="Suite, unit, building, or floor"
                />
              </div>

              <div className="provider-field provider-field--city">
                <label htmlFor="provider-city">City</label>
                <input
                  id="provider-city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  placeholder="City"
                  required
                />
              </div>

              <div className="provider-field">
                <label htmlFor="provider-state">State</label>
                <input
                  id="provider-state"
                  name="state"
                  type="text"
                  autoComplete="address-level1"
                  placeholder="State"
                  required
                />
              </div>

              <div className="provider-field">
                <label htmlFor="provider-zip">ZIP code</label>
                <input
                  id="provider-zip"
                  name="zip_code"
                  type="text"
                  autoComplete="postal-code"
                  inputMode="numeric"
                  placeholder="ZIP code"
                  pattern="[0-9]{5}(-[0-9]{4})?"
                  title="Enter a 5-digit ZIP code or ZIP+4"
                  required
                />
              </div>
            </div>
          </fieldset>

          <button
            className="button button--blue provider-submit"
            type="submit"
            disabled={submissionState === "sending"}
          >
            {submissionState === "sending"
              ? "Submitting..."
              : "Submit provider interest"}
          </button>

          <p
            ref={statusRef}
            className={`provider-form-status provider-form-status--${submissionState}`}
            role="status"
            aria-live="polite"
          />
        </form>
      </div>
    </Reveal>
  );
}
