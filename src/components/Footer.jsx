import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <footer className="footer-links">
      <IconContext.Provider value={{ color: "grey", size: "1.75rem" }}>
        <a href="">
          <FaSquareXTwitter />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100009065963820"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.instagram.com/ehsan.mehrali/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare />
        </a>
        <a
          href="https://github.com/ehsanmehrali"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
      </IconContext.Provider>
    </footer>
  );
}
