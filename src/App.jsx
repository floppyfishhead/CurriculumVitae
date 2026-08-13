import { NavLink, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Biography from "./Pages/Biography";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import NotFound from "./Pages/NotFound";
import SocialLinks from "./Components/SocialLinks";
import Home from "./Pages/Home";
import image from "../src/Images/Favicon.png";

function Layout({ children }) {
  return (
    <div className="site-shell">
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <span className="brand-mark">BKT</span> B. Keith Turner
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
        <div class="container text-center">
          <div class="row">
            <div class="col">© {new Date().getFullYear()} Brian K. Turner</div>
            <div class="col"></div>
            <div class="col">Ideas Into Solutions</div>
            <div class="col">
              <img
                className="footer-logo"
                src={image}
                width="40"
                height="28"
                alt="photo"
              ></img>
            </div>
          </div>
        </div>
        <div className="container d-flex flex-col flex-md-row justify-content-between gap-2"></div>
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
