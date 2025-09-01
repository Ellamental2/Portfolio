import {useState} from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

import PropTypes from "prop-types";

export const ProjectCard = ({
  project: { title, imgSrc, description, skills, demo, source },
}) => {
  const [popup, setPopup] = useState(false);

  const handlePopup = (title, imgSrc, description, skills, demo, source) => {
      setPopup(true);
      var project = {title, imgSrc, description, skills, demo, source}
      console.log(popup, project);
  };

  return (
    <div 
      className={styles.container} 
      onClick={() => handlePopup(title, imgSrc, description, skills, demo, source)}
      role="listitem"
      tabIndex="0"
      aria-label={`Project: ${title}`}
    >
      <img
        src={getImageUrl(imgSrc)}
        alt=""
        className={styles.image}
        aria-hidden="true"
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills} role="list" aria-label={`Skills used in ${title}`}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill} role="listitem">
              <img 
                src={getImageUrl(skill.imageSrc)}
                alt={skill.title}
                title={skill.title}
              />
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {demo && (
          <a 
            href={demo} 
            className={styles.link}
            role="button"
            aria-label={`View demo for ${title}`}
          >
            Demo
          </a>
        )}
        <a 
          href={source} 
          className={styles.link}
          role="button"
          aria-label={`View source code for ${title}`}
        >
          Source
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
};
