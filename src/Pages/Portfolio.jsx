import PageHeader from "../Components/PageHeader";

function Portfolio() {
  return (
    <>
      <PageHeader eyebrow="Selected work" title="Portfolio">
        Career highlights drawn from my updated resume, ready to grow into
        detailed case studies.
      </PageHeader>
      <section className="section">
        <div className="container">
          <div className="notice">
            <i className="bi bi-pencil-square" />
            <div>
              <strong>Next step: add outcomes</strong>
              <br />
              These highlights are resume-based. Add approved metrics, visuals,
              and customer-safe context when you turn them into full case
              studies.
            </div>
          </div>
          <div className="row g-4 mt-3">
            {projects.map((p, i) => (
              <div className="col-lg-4" key={p.title}>
                <article className="project-card h-100">
                  <div className="project-number">0{i + 1}</div>
                  <i className={`bi bi-${p.icon} project-icon`} />
                  <p className="eyebrow dark">{p.label}</p>
                  <h2>{p.title}</h2>
                  <p>{p.text}</p>
                  <div className="skill-cloud">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
          <div className="case-study-prompt mt-5">
            <p className="eyebrow">A useful formula</p>
            <h2>Challenge → Your role → Approach → Measurable result</h2>
            <p>
              For each finished case study, add one strong outcome, one visual
              artifact, and a short reflection on what you learned.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;

const projects = [
  {
    icon: "radar",
    label: "Career accomplishment",
    title: "North American ADAS Portfolio",
    text: "Managed Advanced Safety project managers, coordinated with global development in Germany, maintained the customer-facing portfolio, and led annual strategic planning across sales, investment, competition, development, and marketing.",
    tags: ["Product strategy", "ADAS", "Leadership"],
  },
  {
    icon: "cpu",
    label: "Career accomplishment",
    title: "Brain-Inspired AI Research",
    text: "Researched and programmed deep-learning algorithms and brain-inspired methods at UTSA, while also advising on CISA cybersecurity best practices for mapping to the MITRE ATT&CK framework.",
    tags: ["Deep learning", "Cybersecurity", "Research"],
  },
  {
    icon: "broadcast-pin",
    label: "Career accomplishment",
    title: "Automotive Programs at Scale",
    text: "Led technical work for Daimler, GM, and other OEM programs, including large quoted projects with approximately 0.8–1.5 million lifetime units, and later managed next-generation ADAS radar programs from requirements through production approval.",
    tags: ["Automotive", "Program execution", "Technical leadership"],
  },
];
