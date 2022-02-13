import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.grid}>
      <h1 className={styles.title}>Sega Master System</h1>
      <p>
        The <b>Sega Master System</b> (マスターシステム Masutā Shisutemu) is a video
        game console released by Sega in 1985. The system was originally
        designed as the Sega Mark III. The Master System was one of Sega's
        best-selling consoles, outselling Nintendo's NES.
        <br />
        <br />
        The Master System was backwards compatible with earlier SG-1000 titles.
        As well as the standard cartridge slot. Sega developed a pass-through
        device, titled Power Base for North America, for the Mega Drive,
        allowing Master System cartridges to be played on the newer system.<br /><br />
        Several sequels and variants were designed by Sega to replace the Master
        System.<br /><br />
        In North America, Sega did not want to risk challenging Nintendo
        directly and instead contracted Tonka to market the Master System.
        However, as a toy manufacturer, Tonka had no experience or knowledge of
        electronic games and their marketing skills proved extremely poor.
      </p>
    </div>
  );
}
