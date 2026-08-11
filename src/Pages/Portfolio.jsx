import PageHeader from "../Components/PageHeader";

function Portfolio() {
  return (
    <>
      <PageHeader eyebrow="Selected work" title="Portfolio">
        Career highlights with more to come with Agential AI.
      </PageHeader>
      <section className="section">
        <div className="container">
          <div className="notice">
            <i className="bi bi-pencil-square" />
            <div>
              <strong>
                Current step: Working Agential AI with UserInput with
                React/JavaScript Front-end, Python backend
              </strong>
              <br />
              Highlights from current experience milestones. Additional learned
              metrics, visuals, and context is to follow.
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
            <p className="eyebrow">Frontend, Backend and Core AI</p>
            <h2>Challenge → How to add Agential AI to Portfolio</h2>
            <p>
              As Agential AI a new emerging field, I am exploring how to
              integrate it into my portfolio. The challenge is to showcase the
              capabilities of Agential AI while maintaining a user-friendly
              experience. This involves designing interactive elements that
              demonstrate the AI's decision-making processes and its ability to
              adapt to user inputs. The goal is to create a compelling narrative
              that highlights the potential of Agential AI in real-world
              applications.
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
