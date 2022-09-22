import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sega Master System</h1>
      <div className={styles.grid}>
        <p>
          The <b>Sega Master System</b> (マスターシステム Masutā Shisutemu) is a
          video game console released by Sega in 1985. The system was originally
          designed as the Sega Mark III. The Master System was one of Sega's
          best-selling consoles, outselling Nintendo's NES.
          <br />
          <br />
          The Master System was backwards compatible with earlier SG-1000
          titles. As well as the standard cartridge slot. Sega developed a
          pass-through device, titled Power Base for North America, for the Mega
          Drive, allowing Master System cartridges to be played on the newer
          system.
          <br />
          <br />
          Several sequels and variants were designed by Sega to replace the
          Master System.
          <br />
          <br />
          In North America, Sega did not want to risk challenging Nintendo
          directly and instead contracted Tonka to market the Master System.
          However, as a toy manufacturer, Tonka had no experience or knowledge
          of electronic games and their marketing skills proved extremely poor.
        </p>
        <div className={styles.sectionTitle}>
          <h2 className={styles.sectionTitleHeading}>Peripherals</h2>
        </div>
        <p>
        <br />
          The Master System featured new credit card-sized "Sega Cards." There
          cards were retailed for cheaper prices than cartridges but had lower
          storage capacity. The SMS also featured accessories such as a light
          gun and 3D glasses which were designed to work with a range of
          specially coded games.
          <br />
          <br />
          The Light Phaser, the name of the light gun peripheral, was designed
          after the Zillion gun from the Japanese anime series of the same name.
          Tec Toy also released a blue Light Phaser in Brazil.
          <br />
          <br />
          Sega also developed SegaScope 3-D Glasses that were LCD shutter
          glasses that rapidly alternate between the left and right lenses being
          opaque. The Master System glasses can only be used in the original
          Master System, since it hooks up directly to the card port not found
          in the Master System II.
        </p>
        <div className={styles.sectionTitle}>
          <h2 className={styles.sectionTitleHeading}>Redesigns</h2>
        </div>

          <h3 className={styles.sectionSubtitle}>Master System II</h3>
          <p>
          In 1990, Sega was having success in North America with its Sega
          Genesis and as a result took back the rights from Tonka for the Master
          System. The Sega Master System II was initially made to be a low-cost
          Master System. The system lacked the reset button, expansion port
          (which was never used), and card slot of the original. The Master
          System II could not utilize the 3D glasses accessory as well.
          </p>
          <br />
          <h3 className={styles.sectionSubtitle}>Master System 3</h3>
          <p>The Master System 3 was released by Tec Toy. Although outwardly
          similar to the Master System II, the Master System 3 featured internal
          changes that allowed it to handle cartridges up to 8 megabits (1024
          kilobytes) in size. The Master System 3 came with 131 games built in,
          including Genesis games such as Sonic the Hedgehog, Alex Kidd and
          Golden Axe.</p>
      </div>
    </div>
  );
}
