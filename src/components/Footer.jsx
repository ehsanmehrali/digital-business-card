import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IconContext } from "react-icons";

const twitterLink = import.meta.env.VITE_TWITTER_URL;
const facebookLink = import.meta.env.VITE_FACEBOOK_URL;
const instagramLink = import.meta.env.VITE_INSTAGRAM_URL;
const githubLink = import.meta.env.VITE_GITHUB_URL;

export default function Footer() {
  return (
    <footer className="footer-links">
      <IconContext.Provider value={{ color: "grey", size: "1.75rem" }}>
        <a href={twitterLink} target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
        <a href={facebookLink} target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare />
        </a>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare />
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithubSquare />
        </a>
      </IconContext.Provider>
    </footer>
  );
}
