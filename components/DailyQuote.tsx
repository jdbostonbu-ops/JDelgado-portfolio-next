"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

// Daily quote — written by a Zapier workflow into Google Apps Script,
// read here on every page view. No manual site update required.
const QUOTE_ENDPOINT =
  "https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnR79E5CJf8nb6cTkXFePwL1tzzEdRQbDhzpQHMhobkozhAMQ8JiLzVrMGGaciOTiQ2Xh8Dz17BlduYib9J0daHv_vLAJiE_YbTIZ3W_an0XcAZJucIOyqb0URWmcdkuAMCmKxmEiU0G1nowHQh2ZxqWuGiszmmRVpTB_B9Dy0t74-VayU42SbM0jdiQ1Ho8nruxsX54FHEQ0z08xklLOl-5NXzKw1cPum-BCekbtswljn3gLfqGg6MJd8XZXjrExuUwR7pTQIV1cIuwCh2CvWzPP8Q5lg&lib=MmBjHGtP4zKa_GclqV1ldia5rqA7RFE1E";

export default function DailyQuote() {
  const [quote, setQuote] = useState("Loading today\u2019s quote\u2026");

  useEffect(() => {
    fetch(QUOTE_ENDPOINT)
      .then((r) => r.json())
      .then((data) => {
        if (data?.quote) setQuote(data.quote);
      })
      .catch((err) => {
        console.error("Could not load daily quote:", err);
        setQuote("The automation naps between runs \u2014 refresh to try again.");
      });
  }, []);

  return (
    <Reveal as="div" className="quote-band">
      <span className="eyebrow mono">{"// live automation demo"}</span>
      <p className="pull-quote-text">
        <span className="quote-mark">&ldquo;</span>
        {quote}
        <span className="quote-mark">&rdquo;</span>
      </p>
      <p className="automation-proof-copy">
        Updated daily through a Zapier + Google Apps Script workflow.
        <br />
        No manual site update required.
      </p>
      <div className="automation-flow" aria-label="Automation flow">
        <span>Zapier trigger</span>
        <span>Google Apps Script API</span>
        <span>Portfolio UI</span>
      </div>
    </Reveal>
  );
}
