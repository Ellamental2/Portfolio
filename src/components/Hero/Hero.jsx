import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils"

export const Hero = () => {
    const startDate = new Date('2022-05-01');
    const currentDate = new Date();
    const yearsDiff = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24 * 365.25));

    return (
        <section className={styles.container} id="hero" role="region" aria-labelledby="heroTitle">
            <div className={styles.content}>
                <h1 className={styles.title} id="heroTitle">Hi, I&apos;m Ellam</h1>
                <p className={styles.description}>I&apos;ve been a full stack developer for {yearsDiff} years, leading innovative, progressive projects and managing stakeholder relationships. Skilled in C#, SQL and .NET, with interests in web development and automation. Currently learning about machine learning and working with modern web architectures.</p>
                <a className={styles.contactBtn} href="mailto:ellam.fox@icloud.com" role="button" aria-label="Contact Me via Email">Contact Me</a>
            </div>
            <div className={styles.hero} role="presentation">
                <span className={styles.heroImageContainer}>
                    <div
                        className={styles.heroImg}
                        style={{ backgroundImage: `url(${getImageUrl("about/ellamFox.png")})` }}
                        role="img" 
                        aria-label="Profile photo of Ellam Fox"
                    ></div>
                </span>
            </div>
            <div className={styles.topBlur} aria-hidden="true" />
            <div className={styles.bottomBlur} aria-hidden="true" />
        </section>
    )
}