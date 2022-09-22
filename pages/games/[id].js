import styles from "../.././styles/Home.module.css";
import data from "../../public/data/games.json";

export const getStaticPaths = async () => {
  const paths = data.games.map((game) => {
    return {
      params: {
        id: game.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  return {
    props: {
      games: data.games,
      id: id - 1,
    },
  };
};

const Games = ({ games, id }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{games[id].name}</h1>
      {console.log(games[id])}
      <div className={styles.grid}>
        <span>{games[id].name}</span>
      </div>
    </div>
  );
};

export default Games;
