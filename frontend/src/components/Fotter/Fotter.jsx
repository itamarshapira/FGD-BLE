import "./Fotter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Fotter() {
  return (
    <div className="fotter">
      <h1>FG-detection</h1>
      <div className="footer-social">
        <a
          href="https://github.com/itamarshapira/smartBrain"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href="https://www.linkedin.com/in/itamar-shapira-921a72279/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </div>
  );
}

export default Fotter;
