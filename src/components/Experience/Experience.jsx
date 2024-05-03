import styles from "./Experience.module.css";
import skills from '../../data/skills.json';
import history from '../../data/history.json';
import { getImageUrl } from '../../utils';

export const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {
                    skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.name} />
                                </div>    
                                <p>{skill.title}</p>
                            </div>
                        );
                    })
                }
            </div>
            <ul className={styles.history}>
                {
                    history.map((job, id) => {
                        return (
                            <li key={id} className={styles.historyItem}>
                                <img src={getImageUrl(job.imageSrc)} alt={job.company} />
                                <div className={styles.historyItemDetails}>
                                    <h3>{job.role}</h3>
                                    <h4>{job.organisation}</h4>
                                    <p>{job.startDate} - {job.endDate}</p>
                                    <ul>
                                        {job.responsibilities.map((responsibility, id) => {
                                            return (
                                                <li key={id}>{responsibility}</li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    </section>
  )
}
