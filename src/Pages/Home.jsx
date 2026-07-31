import { NavLink } from "react-router-dom";
import Avatar from "../Components/Avatar";

const competencies = [
  "AI",
  "Machine Learning",
  "Deep Learning",
  "Cybersecurity",
  "Electrical Engineering",
  "Embedded Systems",
  "ADAS",
  "Automotive Engineering",
  "Manufacturing",
  "Product Development",
];

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8">
              <p className="eyebrow">AI Solutions Engineer · AI Consultant</p>
              <h1>
                Deep engineering roots.
                <br />
                <span>Future-facing solutions.</span>
              </h1>
              <p className="hero-copy">
                Electrical engineer and MBA combining graduate AI research with
                decades of engineering leadership to help organizations turn
                ambitious technology into practical results.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <NavLink className="btn btn-primary" to="/portfolio">
                  Explore my work <i className="bi bi-arrow-up-right" />
                </NavLink>
                <NavLink className="btn btn-outline-light" to="/resume">
                  View full resume
                </NavLink>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-center">
              <Avatar />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row g-4 stat-row">
            <div className="col-md-4">
              <div className="stat">
                <strong>20+</strong>
                <span>years in automotive engineering and leadership</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat">
                <strong>AI + MBA</strong>
                <span>technical depth with business perspective</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat">
                <strong>0.8–1.5M</strong>
                <span>lifetime units on major quoted programs</span>
              </div>
            </div>
          </div>
          <div className="row g-5 mt-4">
            <div className="col-lg-5">
              <p className="eyebrow dark">At a glance</p>
              <h2>Built for the space between strategy and implementation.</h2>
            </div>
            <div className="col-lg-7">
              <p className="section-copy">
                My background spans graduate research in deep learning and
                cybersecurity, automotive ADAS, high-volume manufacturing, solar
                design, product development, and program execution. I bring
                together hands-on engineering, cross-functional leadership, and
                business strategy to move complex work forward.
              </p>
              <div className="skill-cloud">
                {competencies.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
