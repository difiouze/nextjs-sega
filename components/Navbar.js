import Link from "next/link";
import styles from '../styles/Home.module.css'

const Navbar = () => {
    return (
        <div className={styles.grid}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/listing/listing"><a>Top 10 Games</a></Link>
        </div>
    )
}

export default Navbar;