import styles from "../.././styles/Home.module.css";
import data from "../../public/data/games.json";
import Link from "next/link";

export const getStaticProps = async () => {

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
          <Link href={"/game/" + game.id} key={game.id}>
            <div className={styles.card}>
              <h3>{game.name}</h3>
              <img src={game.img} />
              <span>{game.year}</span>
              <span>{game.publisher}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Listing;
