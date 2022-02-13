import styles from "../.././styles/Home.module.css";
import fs from "fs/promises";
import path from "path";

export const getStaticProps = async () => {
  const filPath = path.join(process.cwd(), "data", "games.json");
  const jsonData = await fs.readFile(filPath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      games: data.games,
    },
  };
};

const Listing = ({ games }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Top 10 Games</h1>
      <div className={styles.grid}>
        {games.map((game) => (
          <div className={styles.card} key={game.id}>
            <h3>{game.name}</h3>
            <img src={game.img} />
            <span>{game.year}</span>
            <span>{game.publisher}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
