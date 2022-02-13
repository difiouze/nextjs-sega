import Link from "next/link";
import styles from "../styles/Nav.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <nav className={styles.navcontainer}>
        <div className={styles.logo}>
          <Image src="/img/SEGA_logo.svg" width={200} height={70} />
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/listing/listing">Top 10 Games</Link>
      </nav>
    </div>
  );
};

export default Navbar;
