import About from "../about/About";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import Resume from "../resume/Resume";
import "./view.css";

export default function View({ view, setView }) {
  return (
    <>
      <div className="viewContainer">
        <nav className="navContainer">
          <ul>
            <li
              className={`navbar-item ${view === "about" ? "selected" : ""}`}
              onClick={() => setView("about")}
            >
              About
            </li>
            <li
              className={`navbar-item ${
                view === "portfolio" ? "selected" : ""
              }`}
              onClick={() => setView("portfolio")}
            >
              Portfolio
            </li>
            <li
              className={`navbar-item ${view === "contact" ? "selected" : ""}`}
              onClick={() => setView("contact")}
            >
              Contact
            </li>
            <li
              className={`navbar-item ${view === "resume" ? "selected" : ""}`}
              onClick={() => setView("resume")}
            >
              Resumé
            </li>
          </ul>
        </nav>

        <section className="view">
          {view === "about" && <About />}
          {view === "portfolio" && <Portfolio />}
          {view === "contact" && <Contact />}
          {view === "resume" && <Resume />}
        </section>

        <footer>
          <a
            href="https://github.com/KateMcRo"
            aria-label="Kate Roger's Github profile"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/KateMcRo/"
            aria-label="Kate Roger's LinkedIn profile"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://instagram.com/ohkate_life"
            aria-label="Kate Roger's Instagram profile"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </footer>
      </div>
    </>
  );
}
