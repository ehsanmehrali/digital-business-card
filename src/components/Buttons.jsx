import { MdEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";

export default function Buttons() {
  return (
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
  );
}
