import styles from "../.././styles/Home.module.css";
import data from '../../public/data/games.json'
// import fs from "fs/promises";
// import path from "path";


export const getStaticProps = async () => {
  // const filePath = path.join(process.cwd(), "data", "games.json");
  // const jsonData = await fs.readFile(filePath);
  // const data = JSON.parse(jsonData);
  console.log(data.games)

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
