import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <div className={styles.grid}>
      <h1 className={styles.title}>About</h1>
      <ul>
        <li>
          <b>CPU</b>
          <ul>
            <li>
              The Master System's CPU is an 8-bit Zilog Z80.[32] The maximum
              addressable memory is 64 kB.
            </li>
          </ul>
        </li>
        <li>
          <b>Video</b>
          <ul>
            <li>
              <b>Graphics:</b> VDP (Video Display Processor) derived from Texas
              Instruments TMS9918A
              <ul>
                <li>
                  Up to 32 simultaneous colors available (one 16-color palette
                  for sprites or background, an additional 16-color palette for
                  background only) from a palette of 64 (can also show 64
                  simultaneous colors using programming tricks)
                </li>
                <li>
                  Screen resolutions 256×192 and 256×224. PAL/SECAM also
                  supports 256×240
                </li>
                <li>
                  8×8 pixel characters, max 463 (due to VRAM space limitation)
                </li>
                <li>8×8 or 8×16 pixel sprites, max 64</li>
                <li>Horizontal, vertical, and partial screen scrolling</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <b>Audio</b>
          <ul>
            <li>
              <b>Sound (PSG):</b> Texas Instruments SN76489 (note that the Sega
              Master System, Game Gear, and Mega Drive used a slightly altered
              clone of the newer SN76489A, while the older SG-series used the
              original SN76489)
              <ul>
                <li>4 channel mono sound (3 Square Waves, 1 White noise)</li>
                <li>
                  3 tone generators, 10 octaves each, 1 white noise generator
                </li>
              </ul>
            </li>
            <li>
              <b>Sound (FM):</b> Yamaha YM2413
              <ul>
                <li>Mono FM synthesis</li>
                <li>
                  Switchable between 9 tone channels or 6 tone channels + 5
                  percussion channels
                </li>
                <li>
                  Included as a built-in "accessory" with the Japanese Master
                  System (1987)
                </li>
                <li>Supported by certain games only</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <b>Onboard RAM</b>
          <ul>
            <li>
              <b>Boot ROM:</b> 64 kbit (8 KB) to 2048 kbit (256 KB), depending
              on built-in game
            </li>
            <li>
              <b>Main RAM:</b> 64 kbit (8 KB), can be supplemented by game
              cartridges
            </li>
            <li>
              <b>Video RAM:</b> 128 kbit (16 KB)
            </li>
            <li>
              <b>Game Card slot</b> (not available in the Master System II)
            </li>
            <li>
              <b>Game Cartridge slot</b> (not included on newer Brazilian
              models, as these have built-in games)
              <ul>
                <li>
                  Japanese and South Korean consoles used 44-pin cartridges, the
                  same shape as SG-1000 cartridges
                </li>
                <li>
                  All other consoles use 50-pin cartridges[33] with a wider
                  shape
                </li>
                <li>
                  The difference in cartridge style is a form of regional
                  lockout
                </li>
              </ul>
            </li>
            <li>
              <b>Expansion slot</b>
              <ul>
                <li>
                  Unused, pinout compatible with 50-pin cartridges (but opposite
                  gender) in all regions
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <b>Dimensions</b>
          <ul>
            <li>Width: 365 mm</li>
            <li>Depth: 170 mm</li>
            <li>Height: 69 mm</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default About;
