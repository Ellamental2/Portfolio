import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:ellam.fox@icloud.com">
            <img
              src={getImageUrl("contact/emailIcon.png")}
              alt="Email icon"
            />
            ellam.fox@icloud.com
          </a>
        </li>
        <li className={styles.link}>          
          <a href="https://www.linkedin.com/in/ellam-fox/">
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            linkedin.com/in/ellam-fox/
          </a>
        </li>
        <li className={styles.link}>          
          <a href="https://www.github.com/Ellamental2">
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
            github.com/Ellamental2
          </a>
        </li>
      </ul>
    </footer>
  );
};
