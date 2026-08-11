import { NavLink, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Biography from "./Pages/Biography";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import NotFound from "./Pages/NotFound";
import SocialLinks from "./Components/SocialLinks";
import Home from "./Pages/Home";

function Layout({ children }) {
  return (
    <div className="site-shell">
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <span className="brand-mark">BKT</span> B Keith Turner
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <div className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
              {[
                ["/", "Home"],
                ["/resume", "Resume"],
                ["/portfolio", "Portfolio"],
                ["/biography", "Biography"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <div className="ms-lg-3 mt-3 mt-lg-0">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer>
        <div className="container d-flex flex-column flex-sm-row justify-content-between gap-2">
          <span>© {new Date().getFullYear()} Brian K. Turner</span>
          <span>
            Engineering ideas into useful outcomes{" "}
            <span aria-hidden="true">⚡</span>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
