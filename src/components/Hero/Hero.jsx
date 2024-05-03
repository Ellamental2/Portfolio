import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils"

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I&apos;m Ellam</h1>
                <p className={styles.description}>I&apos;m a full stack developer with 2 years of experience. Skilled in C#, SQL and .NET, with interests in web development and automation. Reach out if you would like to learn more</p>
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