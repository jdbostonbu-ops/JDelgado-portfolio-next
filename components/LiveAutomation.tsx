"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const QUOTE_ENDPOINT =
  "https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnR79E5CJf8nb6cTkXFePwL1tzzEdRQbDhzpQHMhobkozhAMQ8JiLzVrMGGaciOTiQ2Xh8Dz17BlduYib9J0daHv_vLAJiE_YbTIZ3W_an0XcAZJucIOyqb0URWmcdkuAMCmKxmEiU0G1nowHQh2ZxqWuGiszmmRVpTB_B9Dy0t74-VayU42SbM0jdiQ1Ho8nruxsX54FHEQ0z08xklLOl-5NXzKw1cPum-BCekbtswljn3gLfqGg6MJd8XZXjrExuUwR7pTQIV1cIuwCh2CvWzPP8Q5lg&lib=MmBjHGtP4zKa_GclqV1ldia5rqA7RFE1E";

export default function LiveAutomation() {
  const [quote, setQuote] = useState("Loading today's quote...");

  useEffect(() => {
    fetch(QUOTE_ENDPOINT)
      .then((response) => response.json())
      .then((data: { quote?: string }) => {
        if (data.quote) setQuote(data.quote);
      })
      .catch(() => {
        setQuote("The daily automation is between runs. Refresh to try again.");
      });
  }, []);

  return (
    <Reveal className="section section--ink">
      <div className="section-head section-head--left">
        <span className="eyebrow mono cyan-text">{"// live automation demo"}</span>
        <p className="pull-quote-text">
          <span className="pq-mark pq-open">&ldquo;</span>
          {quote}
          <span className="pq-mark pq-close">&rdquo;</span>
        </p>
        <p className="automation-proof-copy">
          Updated daily through a Zapier + Google Apps Script workflow. No manual site update
          required.
        </p>
        <div className="automation-flow" aria-label="Automation flow">
          <span>Zapier trigger</span>
          <span>Google Apps Script API</span>
          <span>Portfolio UI</span>
        </div>
        <div className="automation-social-proof">
          <div className="automation-social-copy">
            <span className="automation-social-kicker mono">Zapier social post</span>
            <h3>Automation that ships beyond the website.</h3>
            <p>
              This reel is part of the same workflow mindset: connect the trigger, prepare the
              content, and publish a finished social media post without adding extra manual steps.
              Even AI-generated videos.
            </p>
            <a
              className="automation-social-link"
              href="https://www.instagram.com/reel/DafM9XrFKxq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              View Instagram reel
            </a>
          </div>
          <div className="automation-reel-frame">
            <iframe
              src="https://www.instagram.com/reel/DafM9XrFKxq/embed"
              title="Zapier social media automation Instagram reel"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
