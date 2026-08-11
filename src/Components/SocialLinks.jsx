function SocialLinks() {
  const links = [
    [
      "linkedin",
      "LinkedIn",
      "https://www.linkedin.com/in/briankeithturnerengineer",
    ],
    ["facebook", "Facebook", "https://www.facebook.com/"],
    ["github", "GitHub", "https://www.github.com/briankeithturnerengineer"],
  ];
  return (
    <div className="social-links d-flex gap-2">
      {links.map(([icon, label, href]) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
        >
          <i className={`bi bi-${icon}`} />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
