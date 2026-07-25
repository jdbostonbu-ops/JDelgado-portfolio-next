import Reveal from "./Reveal";

const puppyVideos = [
  {
    src: "/Wet-puppy.mp4",
    title: "Scroll-stopping concepts",
    description: "Playful creative built to make pet lovers pause.",
  },
  {
    src: "/Muddy-paw.mp4",
    title: "Social-ready stories",
    description: "Short-form moments designed for feeds and campaigns.",
  },
  {
    src: "/Hungry-puppy.mp4",
    title: "Product-focused promos",
    description: "Brand storytelling that gives products personality.",
  },
  {
    src: "/Chew-toy.mp4",
    title: "Campaign-ready content",
    description: "Polished video your pet business can make its own.",
  },
];

const brandDetails = ["Your logo", "Store address", "Phone number", "Call to action"];

export default function PetVideoShowcase() {
  return (
    <Reveal id="pet-videos" className="section pet-video-section">
      <div className="pet-video-intro">
        <div className="pet-video-heading">
          <span className="eyebrow mono">{"// video content for pet brands"}</span>
          <h2 className="section-title">
            Have a pet business?
            <br />
            Let&apos;s make it impossible to scroll past.
          </h2>
          <p className="section-subtitle">
            I create playful, polished videos for pet stores, groomers, walkers, and
            other pet brands—then customize the final cut with the details customers
            need to find you.
          </p>
        </div>

        <aside className="pet-brand-kit" aria-label="Available business branding">
          <span className="pet-brand-kit-label mono">Your brand, built in</span>
          <div className="pet-brand-details">
            {brandDetails.map((detail) => (
              <span key={detail}>{detail}</span>
            ))}
          </div>
        </aside>
      </div>

      <div className="pet-video-grid">
        {puppyVideos.map((video) => (
          <article className="pet-video-card" key={video.src}>
            <video
              src={video.src}
              aria-label={`${video.title} puppy video`}
              controls
              playsInline
              preload="metadata"
            />
            <div className="pet-video-caption">
              <span className="pet-video-paw" aria-hidden="true">
                ●
              </span>
              <div>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="pet-video-cta">
        <p>
          Your business. Your contact details. A video that feels unmistakably yours.
        </p>
        <a className="button button--blue" href="#contact">
          Brand my next video
        </a>
      </div>
    </Reveal>
  );
}
