import styles from "../.././styles/Home.module.css";
import games from "../api/games";

const Listing = () => {
  return (
    <div className={styles.container}>
      <h1>Top 10 Games</h1>
      <div className={styles.grid}>
        {games.map((game) => (
          <div className={styles.card}>
              <h3>{game.name}</h3>
              <span>{game.year}</span>
              <span>{game.publisher}</span>
              </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
