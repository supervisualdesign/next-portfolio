import Link from "next/link";
import styles from '../styles/utils.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Side(props) {
  return (
    <side className={styles.side}>
      <nav
        className={styles.nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link href="/" passHref>
        <h1 className={utilStyles.heading2Xl}>L</h1>
        </Link>
        <div>
           <Link href="/" passHref>
                      <h1 className={utilStyles.heading2Xl}></h1>
        </Link>
        </div>
      </nav>
    </side>
  );
}
