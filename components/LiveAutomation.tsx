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
      </div>
    </Reveal>
  );
}
