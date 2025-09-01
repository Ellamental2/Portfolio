import styles from "./Experience.module.css";
import history from '../../data/history.json';
import projects from "../../data/projects.json";
import { getImageUrl } from '../../utils';
import { ProjectCard } from "./ProjectCard";

export const Experience = () => {
    
    return (
        <section id="experience" className={styles.container} role="region" aria-labelledby="experienceTitle projectsTitle">
            <div className={styles.content}>
                <div className={styles.projects}>
                <h2 className={styles.title} id="projectsTitle">Projects</h2>
                    <div className={styles.projectCards} role="list">
                        {projects.map((project, id) => {
                            return <ProjectCard key={id} project={project} />;
                        })}
                    </div>
                </div>
                <div className={styles.experience}>
                    <h2 className={styles.title} id="experienceTitle">Experience</h2>
                    <ul className={styles.history} role="list">
                        {
                            history.map((job, id) => {
                                return (
                                    <li key={id} className={styles.historyItem} role="listitem">
                                        <div className={styles.historyItemDetails}>
                                            <div className={styles.historyItemHeader}>
                                                <img 
                                                    src={getImageUrl(job.imageSrc)} 
                                                    alt="" 
                                                    aria-hidden="true" 
                                                />
                                                <div>
                                                    <h3>{job.role}</h3>
                                                    <h4>{job.organisation}</h4>
                                                    <p>{job.startDate} - {job.endDate}</p>
                                                </div>
                                            </div>
                                            {job.responsibilities.length > 0 && (
                                                <>
                                                    <h3 id={`responsibilities-${id}`}>Responsibilities</h3>
                                                    <ul className={styles.responsibilities} role="list" aria-labelledby={`responsibilities-${id}`}>
                                                        {job.responsibilities.map((responsibility, respId) => {
                                                            return (
                                                                <li key={respId} role="listitem">{responsibility}</li>
                                                            );
                                                        })}
                                                    </ul>
                                                </>
                                            )}
                                            {job.achievements.length > 0 && (
                                                <>
                                                    <h3 id={`achievements-${id}`}>Key Achievements</h3>
                                                    <ul className={styles.responsibilities} role="list" aria-labelledby={`achievements-${id}`}>
                                                        {job.achievements.map((achievement, achId) => {
                                                            return (
                                                                <li key={achId} role="listitem">{achievement}</li>
                                                            );
                                                        })}
                                                    </ul>
                                                </>
                                            )}
                                            <ul className={styles.skills} role="list" aria-label={`Skills used at ${job.organisation}`}>
                                                {job.skills.map((skill, skillId) => {
                                                    return (
                                                        <li key={skillId} className={styles.skill} role="listitem">
                                                            <div className={styles.skillImageContainer}>
                                                                <img 
                                                                    src={getImageUrl(skill.imageSrc)}
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
