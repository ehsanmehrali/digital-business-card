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
        <button className="btn">
          <MdEmail />
          <span className="btn-text">Email</span>
        </button>
        <button className="btn btn-linkedin">
          <ImLinkedin />
          <span className="btn-text btn-text-linkedin">LinkedIn</span>
        </button>
      </div>
    </section>
  );
}
