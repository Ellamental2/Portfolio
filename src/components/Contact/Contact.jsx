import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container} role="contentinfo" aria-labelledby="contactHeading">
      <div className={styles.text}>
        <h2 id="contactHeading">Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links} role="list">
        <li className={styles.link} role="listitem">
          <a href="mailto:ellam.fox@icloud.com" aria-label="Email: ellam.fox@icloud.com">
            <img
              src={getImageUrl("contact/emailIcon.png")}
              alt=""
              aria-hidden="true"
            />
            <span>ellam.fox@icloud.com</span>
          </a>
        </li>
        <li className={styles.link} role="listitem">          
          <a href="https://www.linkedin.com/in/ellam-fox/" aria-label="LinkedIn: linkedin.com/in/ellam-fox/">
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt=""
              aria-hidden="true"
            />
            <span>linkedin.com/in/ellam-fox/</span>
          </a>
        </li>
        <li className={styles.link} role="listitem">          
          <a href="https://www.github.com/Ellamental2" aria-label="GitHub: github.com/Ellamental2">
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt=""
              aria-hidden="true"
            />
            <span>github.com/Ellamental2</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};
