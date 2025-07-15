import { MdEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";

const emailLink = import.meta.env.VITE_EMAIL_URL;
const linkedinLink = import.meta.env.VITE_LINKEDIN_URL;

export default function Buttons() {
  return (
    <div className="btn-container">
      <a
        href={emailLink}
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail color="black" size="1rem" />
        <span className="btn-text">Email</span>
      </a>
      <a
        href={linkedinLink}
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
