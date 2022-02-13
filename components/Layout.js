import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/Home.module.css"

const Layout = ({ children }) => {
  return (
    <div className={styles.main}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
