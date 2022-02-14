import Image from "next/image";
import Link from "next/link";
import styles from "../styles/NotFound.module.css"

const NotFound = () => {
    return (
      <div className={styles.grid}>
          <h2 className={styles.link}> Uh Oh ! Something went wrong !</h2>
     <Image src="/img/notfound.gif" width="400" height="486" />
     <Link href="/" className={styles.link}>Go back to Homepage</Link> 
      </div>
    );
  };
  
  export default NotFound;
