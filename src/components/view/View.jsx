import "./view.css";

export default function View({ view }) {
  return (
    <>
      <div className="viewContainer">
        <nav className="navContainer">
          <ul>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>Resumé</li>
          </ul>
        </nav>

        <section className="view">
          <div className="wrapper">
            <div className="imgContainer">Pic Goes here</div>
            <div className="pairContainer">
              <div className="titleContainer">About Me</div>
              <div className="bioContainer">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet quod soluta maxime libero nostrum aspernatur optio
                doloribus laboriosam enim cumque eos, nisi reiciendis officiis
                laudantium? Culpa quas aperiam animi ipsa!
              </div>
            </div>
          </div>
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
