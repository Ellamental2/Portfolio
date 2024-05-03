import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils"

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I&apos;m Ellam</h1>
                <p className={styles.description}>I&apos;m a full stack developer for 2 years, leading innovative, progressive projects and managing stakeholder relationships. Skilled in C#, SQL and .NET, with interests in web development and automation. currently learning about mobile and cloud technologies as well as modern web architectures.</p>
                <a className={styles.contactBtn} href="mailto:ellam.fox@icloud.com">Contact Me</a>
            </div>
            <img
                className={styles.heroImg}
                src={getImageUrl("hero/heroImage.png")}
                alt="hero-image"
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}