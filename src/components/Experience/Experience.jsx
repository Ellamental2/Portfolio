import styles from "./Experience.module.css";
import history from '../../data/history.json';
import projects from "../../data/projects.json";
import { getImageUrl } from '../../utils';
import { ProjectCard } from "./ProjectCard";

export const Experience = () => {
    
    return (
        <section id="experience" className={styles.container}>
            <div className={styles.content}>
                <div className={styles.projects}>
                <h2 className={styles.title}>Projects</h2>
                    <div className={styles.projectCards}>
                        {projects.map((project, id) => {
                            return <ProjectCard key={id} project={project} />;
                        })}
                    </div>
                </div>
                <div className={styles.experience}>
                    <h2 className={styles.title}>Experience</h2>
                    <ul className={styles.history}>
                        {
                            history.map((job, id) => {
                                return (
                                    <li key={id} className={styles.historyItem}>
                                        <div className={styles.historyItemDetails}>
                                            <div className={styles.historyItemHeader}>
                                                <img src={getImageUrl(job.imageSrc)} alt={job.company} />
                                                <div>
                                                    <h3>{job.role}</h3>
                                                    <h4>{job.organisation}</h4>
                                                    <p>{job.startDate} - {job.endDate}</p>
                                                </div>
                                            </div>
                                            {job.responsibilities.length > 0 && (
                                                <>
                                                    <h3>Responsibilities</h3>
                                                    <ul className={styles.responsibilities}>
                                                        {job.responsibilities.map((responsibility, id) => {
                                                            return (
                                                                <li key={id}>{responsibility}</li>
                                                            );
                                                        })}
                                                    </ul>
                                                </>
                                            )}
                                            {job.acheivements.length > 0 && (
                                                <>
                                                    <h3>Key Achievements</h3>
                                                    <ul className={styles.responsibilities}>
                                                        {job.acheivements.map((achievement, id) => {
                                                            return (
                                                                <li key={id}>{achievement}</li>
                                                            );
                                                        })}
                                                    </ul>
                                                </>
                                            )}
                                            <ul className={styles.skills}>
                                                {job.skills.map((skill, id) => {
                                                    return (
                                                        <li key={id} className={styles.skill}>
                                                            <div className={styles.skillImageContainer}>
                                                                <img src={getImageUrl(skill.imageSrc)}
                                                                    alt={skill.title}
                                                                    title={skill.title}
                                                                />
                                                            </div>
                                                        </li>
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
            </div>
        </section>
    );
}
