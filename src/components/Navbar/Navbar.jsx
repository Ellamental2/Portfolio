import {useState} from "react";
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    return (
        <nav className={styles.navbar} role="navigation" aria-label="Main navigation"> 
            <a className={styles.title} href="/" role="banner">Ellam Fox</a>
            <div className={styles.menu}>
                <button 
                    className={styles.menuBtn}
                    aria-expanded={menuOpen}
                    aria-controls="navMenu"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    onClick = {() => setMenuOpen(!menuOpen)}
                >
                    <img
                        src={
                            menuOpen
                                ? getImageUrl("nav/closeIcon.png")
                                : getImageUrl("nav/menuIcon.png")
                        }
                        alt=""
                        aria-hidden="true"
                    />
                </button>
                <ul
                    id="navMenu"
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    role="menu"
                >
                    <li role="none">
                        <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} role="menuitem">Contact</a>
                    </li>
                    <li role="none">
                        <a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')} role="menuitem">Experience</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}