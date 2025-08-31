import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils"

export const Hero = () => {
    const startDate = new Date('2022-05-01');
    const currentDate = new Date();
    const yearsDiff = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24 * 365.25));

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I&apos;m Ellam</h1>
                <p className={styles.description}>I&apos;ve been a full stack developer for {yearsDiff} years, leading innovative, progressive projects and managing stakeholder relationships. Skilled in C#, SQL and .NET, with interests in web development and automation. currently learning about mobile and cloud technologies as well as modern web architectures.</p>
                <a className={styles.contactBtn} href="mailto:ellam.fox@icloud.com">Contact Me</a>
            </div>
            <div className={styles.hero}>
                <span className={styles.heroImageContainer}>
                    <span
                        className={styles.heroImg}
                        style={{ backgroundImage: `url(${getImageUrl("about/ellamFox.png")})` }}
                        alt="hero-image"
                    ></span>
                </span>
            </div>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}