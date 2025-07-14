import { MdEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";

export default function Info() {
  return (
    <section className="info-container">
      <h1>Ehsan Mehrali</h1>
      <h2>Full Stack Developer</h2>
      <a href="https://www.ehsan.com" target="_blank" rel="noopener noreferrer">
        www.ehsan.com
      </a>
      <div className="btn-container">
        <a
          href="mailto:ehsanmehrali428@gmail.com"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail color="black" size="1rem" />
          <span className="btn-text">Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/ehsan-mehrali"
          className="btn btn-linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImLinkedin color="white" size="1rem" />
          <span className="btn-text btn-text-linkedin">LinkedIn</span>
        </a>
      </div>
    </section>
  );
}
