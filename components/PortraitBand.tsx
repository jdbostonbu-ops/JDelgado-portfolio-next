"use client";

import { useEffect, useRef, type ReactElement } from "react";

const PortraitBand = (): ReactElement => {
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect((): (() => void) | undefined => {
    const media = mediaRef.current;
    const video = videoRef.current;

    if (!media || !video) {
      return undefined;
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    let observer: IntersectionObserver | null = null;
    let soundEnabled = false;

    const resetVideo = (): void => {
      video.pause();
      video.currentTime = 0;
    };

    const playFromStart = (): void => {
      if (reducedMotionQuery.matches) {
        return;
      }

      video.currentTime = 0;
      void video.play().catch((): void => {
        resetVideo();
      });
    };

    const enableSound = (): void => {
      if (soundEnabled) {
        return;
      }

      soundEnabled = true;
      video.muted = false;

      // Start playback during the user gesture so browsers authorize audio on
      // later hover playback, then immediately return to the poster frame.
      const playback = video.play();
      void playback
        .then((): void => {
          resetVideo();
        })
        .catch((): void => {
          video.muted = true;
          soundEnabled = false;
        });
    };

    const handleMouseEnter = (): void => {
      playFromStart();
    };

    const handleMouseLeave = (): void => {
      resetVideo();
    };

    const handleReducedMotionChange = (): void => {
      if (reducedMotionQuery.matches) {
        resetVideo();
        observer?.disconnect();
      }
    };

    reducedMotionQuery.addEventListener("change", handleReducedMotionChange);
    document.addEventListener("pointerdown", enableSound, { once: true });

    if (!reducedMotionQuery.matches && hoverQuery.matches) {
      media.addEventListener("mouseenter", handleMouseEnter);
      media.addEventListener("mouseleave", handleMouseLeave);
    } else if (!reducedMotionQuery.matches) {
      const handleIntersection = (entries: IntersectionObserverEntry[]): void => {
        if (!entries.some((entry: IntersectionObserverEntry): boolean => entry.isIntersecting)) {
          return;
        }

        void video.play().catch((): void => {
          resetVideo();
        });
        observer?.disconnect();
      };

      observer = new IntersectionObserver(handleIntersection, { threshold: 0.45 });
      observer.observe(media);
    }

    return (): void => {
      observer?.disconnect();
      media.removeEventListener("mouseenter", handleMouseEnter);
      media.removeEventListener("mouseleave", handleMouseLeave);
      reducedMotionQuery.removeEventListener("change", handleReducedMotionChange);
      document.removeEventListener("pointerdown", enableSound);
      resetVideo();
    };
  }, []);

  return (
    <section className="portrait-band" id="portrait" aria-labelledby="portrait-title">
      <div className="portrait-copy">
        <p className="portrait-eyebrow mono">{"// hover at your own risk"}</p>
        <h2 id="portrait-title">You&apos;re being observed.</h2>
        <p className="portrait-subhead">Hover if you&apos;d like it to be mutual.</p>
        <p className="portrait-sound-hint">Click anywhere, then hover to hear the butterfly flutter.</p>
      </div>
      <div
        className="portrait-media"
        id="portrait-media"
        ref={mediaRef}
        aria-label="Interactive portrait of Jacqueline"
      >
        <video
          id="portrait-video"
          ref={videoRef}
          aria-label="Jacqueline lowers her sunglasses and winks"
          muted
          playsInline
          preload="none"
          loop={false}
          poster="/Monarch_Gaze__Final_Wink_Poster.jpg"
          src="/Monarch_Gaze_.mp4"
        />
      </div>
    </section>
  );
};

export default PortraitBand;
