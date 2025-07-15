import Buttons from "./Buttons";
import About from "./About";
import Interests from "./Interests";

export default function Info() {
  return (
    <section className="info-container">
      <h1>Ehsan Mehrali</h1>
      <h2>Full Stack Developer</h2>
      <a href="https://www.ehsan.com" target="_blank" rel="noopener noreferrer">
        www.ehsan.com
      </a>
      <Buttons />
      <About />
      <Interests />
    </section>
  );
}
