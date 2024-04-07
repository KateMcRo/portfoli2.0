import "./about.css";
import selfie from "../../assets/selfie.jpeg";

export default function About() {
  return (
    <div className="wrapper">
      <section className="imgContainer roundLR roundRL">
        <article className="greeting basic">Hello I'm</article>
        <img
          src={selfie}
          className="selfie roundLR"
          alt="Kate Rogers - Web Developer"
        />
        <div className="name signature">Kate Rogers</div>
        <div className="job-title basic">Web Developer</div>
      </section>

      <section className="pairContainer">
        <div className="titleContainer roundLR basic">
          <h1>ABOUT ME</h1>
        </div>
        <div className="bioContainer roundRL basic">
          <p>
            In 2023 I turned a decades long hobby into a serious professional
            pursuit and earned a Full-Stack Development Certification from UC
            Berkeley.
          </p>
          <p>
            Since then, I've been building responsive websites and dynamic
            applications, while also mentoring new designers and developers.
          </p>
          <p>
            I am committed to thoughtful organization and structure within my
            code. I take pride in crafting solutions that are functional,
            elegant, and maintainable, reflecting my dedication to the craft of
            coding.
          </p>
        </div>
      </section>
    </div>
  );
}
