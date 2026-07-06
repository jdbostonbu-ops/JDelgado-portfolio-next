const links = [
  ["#about", "About"],
  ["#skills", "Skills"],
  ["#services", "Services"],
  ["#testimonials", "Testimonials"],
  ["#projects", "Projects"],
  ["#education", "Education"],
  ["#journey", "Journey"],
];

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-links">
        {links.map(([href, label]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
        <a href="#contact" className="nav-cta">
          Let&apos;s Connect
        </a>
      </div>
    </nav>
  );
}
