import PageHeader from "../Components/PageHeader";

function Resume() {
  return (
    <>
      <PageHeader eyebrow="Experience & credentials" title="Resume">
        A complete web version of the information in my current resume.
      </PageHeader>
      <section className="section">
        <div className="container resume-grid">
          <aside>
            <h2>Core competencies</h2>
            <div className="skill-cloud vertical">
              {competencies.map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
            <h2 className="mt-5">Education</h2>
            <div className="education">
              <p>
                <strong>Master of Business Administration</strong>
                <br />
                DePaul University — Kellstadt Graduate School of Business
                <br />
                <small>December 2012</small>
              </p>
              <p>
                <strong>B.S., Electrical Engineering</strong>
                <br />
                University of Texas at San Antonio
                <br />
                <small>December 2012</small>
              </p>
            </div>
            <h2 className="mt-5">Certification</h2>
            <div className="education">
              <p>
                <strong>PV Design Specialist (PVDS)</strong>
                <br />
                NABCEP Board Certification
                <br />
                <small>March 2025</small>
              </p>
            </div>
          </aside>
          <div>
            <h2>Professional summary</h2>
            <p className="section-copy">
              Tier 1 automotive supplier experience spanning high-volume
              manufacturing, electrical design, engineering leadership,
              quote-to-service project management, and product development
              management. Recent graduate study and project work expanded that
              foundation into AI, cloud computing, cybersecurity, modern
              research tools, and alternative energy.
            </p>
            <div className="resume-note">
              <i className="bi bi-check-circle" /> Authorized to work in the
              United States for any employer.
            </div>
            <h2 className="mt-5">Work experience</h2>
            <div className="timeline">
              {experience.map((x, i) => (
                <article key={`${x.role}-${i}`}>
                  <div className="timeline-dot" />
                  <div className="timeline-heading">
                    <div>
                      <p className="timeline-kicker">
                        {x.company}
                        {x.location ? ` · ${x.location}` : ""}
                      </p>
                      <h3>{x.role}</h3>
                    </div>
                    <time>{x.dates}</time>
                  </div>
                  {x.detail && <p>{x.detail}</p>}
                </article>
              ))}
            </div>
            <h2 className="mt-4">References</h2>
            <p className="section-copy">Available upon request.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;

const competencies = [
  "Artificial Intelligence",
  "Machine Learning",
  "Python",
  "Deep Learning",
  "LLMs",
  "AI Agents",
  "Engineering Automation",
  "Data Analytics",
  "Business Strategy",
];

const experience = [
  {
    role: "Convenience Store",
    company: "Fischer's",
    location: "",
    dates: "August 2025 – Present",
    detail: "",
  },
  {
    role: "Solar Design Engineer",
    company: "NIVO Solar",
    location: "Remote",
    dates: "April 2024 – April 2025",
    detail:
      "Designed modern solar power systems optimized for customer, utility, and governmental needs; connected PV systems with home electrical systems, the grid, energy storage, and other power sources; performed design reviews and supervised design-related issues.",
  },
  {
    role: "Travel / Time Off",
    company: "Self",
    location: "",
    dates: "January 2023 – March 2024",
    detail: "Took a year to travel and spend time with family.",
  },
  {
    role: "Graduate Research",
    company: "The University of Texas at San Antonio",
    location: "San Antonio, TX",
    dates: "January 2020 – January 2023",
    detail:
      "Researched and programmed deep-learning algorithms and brain-inspired methods. Worked with Sandia for CISA, the cybersecurity group for Homeland Security, to advise on MITRE ATT&CK mapping best practices.",
  },
  {
    role: "Business Consultant",
    company: "Self-Employed",
    location: "Grand Blanc, MI",
    dates: "February 2018 – August 2020",
    detail:
      "Consulted private and governmental entities in the automotive technology field, with an emphasis on ADAS.",
  },
  {
    role: "Product Line Manager",
    company: "Meritor WABCO",
    location: "Troy, MI",
    dates: "April 2017 – February 2018",
    detail:
      "Managed North American Advanced Safety project managers and aligned with global ADAS development in Germany. Maintained the active product portfolio and led strategic and financial planning across sales expectations, CAPEX, OPEX, competition, development goals, and marketing needs.",
  },
  {
    role: "Project Manager",
    company: "Continental Automotive Systems Inc.",
    location: "",
    dates: "September 2013 – April 2017",
    detail:
      "Managed fourth- and fifth-generation ADAS radar and biodiesel/flex-fuel sensor projects for GM platforms. Led work from customer requirements through production process approval while managing scope, schedules, resources, work packages, and project metrics.",
  },
  {
    role: "Project Lead Development Engineer",
    company: "Continental Automotive Systems",
    location: "",
    dates: "November 2005 – September 2013",
    detail:
      "Drove R&D activity for Daimler UCI2 products, including DV/PV, customer returns, PCNs, PTNs, technical support, requirements, quality expectations, and technical gate reviews. Served as technical lead for Daimler, GM, and other automotive OEM programs with approximately 0.8–1.5 million lifetime units.",
  },
  {
    role: "Manufacturing Engineer / Product Launch Manager",
    company: "Motorola, Inc.",
    location: "",
    dates: "January 2000 – November 2005",
    detail:
      "Supported existing production processes and introduced technologies, techniques, and systems to improve efficiency and throughput. Applied lean and Six Sigma methods and worked with development teams to launch products through new or modified production processes.",
  },
];
