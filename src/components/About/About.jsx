// import React from 'react'
import styles from "./About.module.css"
import { getImageUrl } from "../../utils"

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img
                src={getImageUrl("about/aboutImage.png")}
                alt="Me sitting with a laptop"
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Application Development</h3>
                        <p>I am experienced in designing applications with responsive designs</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Development</h3>
                        <p>I have experience developing fast and optimised back end systems</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="SQL icon" />
                    <div className={styles.aboutItemText}>
                        <h3>SQL Development</h3>
                        <p>I have optimised and managed multiple SQL Stored procedures including SSRS reporting</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
