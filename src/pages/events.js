import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
/* import { StaticImage} from "gatsby-plugin-image" */

const eventsPage = () => (
  <Layout>
    <p className={styles.nameRelease}>Semi-Conductors Promotion</p> 
    <div>   
    <div className={styles.textCenter}>

    <p className={styles.aboutTxt}>
        <p>Festivals</p>
        «Skygravity festival» • 22-26.07.09 • Crimea Bahchisaray "Orliniy Zalet" - Open Air<br/>
        «Skygravity festival» • 30.07 - 02.08.2008 • Crimea Sudak Morskoe - Open Air <br/>
        «Skygravity festival» • 30.07 -03.08.2007 • Crimea Evpatoriya - Open Air "Solnishko" <br/>
        «Skygravity festival» • 11-15.07.2006 • Crimea Evpatoriya - Open Air "Solnishko" <br/>
        «Skygravity festival» • 12-17.07.2005 • Crimea Evpatoriya - Open Air "Solnishko" <br/> <br/> 
          <p>Parties</p>
        «Monkey Busines» • 14.08.2021 • Kyiv - Open Air <br/> 
        Skygravity Label Party - 20 years Semi-Conductors celebration «Sun Gravity» • 08.05.2021 • Kyiv - Open Air <br/> 
        «Psy Forest Private» Semi-C & Psyshine • 11.07.2020 • Kyiv - Open Air <br/> 
        «Ghosty» with QTB • Semi-C & Psyshine • 13.07.2019 • Kyiv - Open Air <br/> 
        «Contact High» • 13.10.2018 • Kyiv - "Дом Club" <br/> 
        «Kupala Ride» with Inzect • Semi-C & Psyshine •  23.06.2018 • Kyiv - Open Air <br/> 
        «Jet Birthday Party»  •  7.03.2018 • Kyiv - "Теплый Ламповый" <br/>
        «Mothership is Back» Semi_C & Psyshine •  24.06.2017 • Kyiv - Open Air <br/>
        «Jetix Cosmic party» •  7.03.2017 • Kyiv "Roof Top" <br/>
        «Make Trance Not War» •  12.04.2014 • Kyiv "Sambuka" <br/>
        «Trip to Galaxy» •  8.06.2013 • Kyiv - Open Air <br/>
        «Jet birthday party! » •  7.03.2012 • Kyiv "Home Club" <br/>
        Skygravity Label Party -  «Mystagogue : The Initiation»  with Karash • 4.09.2010 • Kyiv - Open Air  <br/>
        Skygravity Label Party - «Urban Forest» with Biosynthesis • 5.09.2009 • Kyiv - Open Air  <br/>
        «Sky Diving» with Braicell- Live • 7.06.2008 • Kyiv - Open Air <br/>
        «Spring Spirit» with Gappeq & Hysteria - Live • 7.03.2008 • Kyiv "Cinema" <br/>
        «Big Sur Party» with Tryambaka Live • 8.12.2007 • Kyiv "Cinema" <br/>
        «Принебесное Тяжение»  Semi-C & Sabotege • 14.07.2007 • Sevastopol - Balaklava "Куба" • Open Air  <br/>
        «Split Vision » •  30.03.2007 • Kyiv "SPLASH" <br/>
        «Рыбные танцы » •  10.03.2007 • Kyiv "SPLASH" <br/>
        «Atom Sun» - Skygravity Afterparty •  1.09.2007 • Kyiv Open Air  <br/>
        «Lunar» •  27.01.2007 • Kyiv "SPLASH" <br/>
        «Skygravity Records private» with Atriohm • 11.11.2006 • Kyiv Open Air <br/>
        «Skygravity Records private» with Sceletone •  09.09.2006 • Kyiv Open Air <br/>
        «Hyper party - 5 years Semi-C » • private party • 28.04.2006 • Kyiv "Sound Planet" <br/>
        «Heaven's prophecy» with Psyfactor • 7.01.2006 • Kyiv "Cinema" <br/>
        «Quadrifoliate clover - 4 Years Semi-C» • private party • 30.04.2005 • Kyiv <br/>
        «Soundomorphyc LAB» • 14.08.2005 • Evpatoriya - "Solnishko" • Open Air<br/>  
        Skygravity preparty «Magic Feeling»  • 24.06.2005 • Evpatoriya - "Solnishko" <br/>         
        «Spring Approach» •  Semi-C & Zooz Rec • 2.04.2005 - Simferopol "2k" <br/>
        «Re Union»  •   18.12.2004 • Evpatoriya - "Vimpel"   <br/>        
        «Micro Invasion»  •   11.12.2004 • Kyiv - "Хали-Гали"   <br/> 
        «Magic Mirror»  • Open Air  14.08.2004 • Evpatoriya - "Solnishko"<br/> 
        «Absolute Undeground party» •  2.05.2004 • Evpatoriya - "Vimpel"<br/> 
        «Isratrance party» •  23.04.2004 • Simferopol - "Nagval"<br/>
        «Winter Beats»  •   29.02.2004 • Simferopol - "Zed"<br/>   
        «Solar Spring» • 12.03.2004 • Evpatoriya "XL" <br/>
        «Universal Synchronism  •   16.01.2004 • Evpatoriya - "XL"<br/>        
        «Imprint» • 28.11.2003 • Evpatoriya "XL" <br/>        
        «p.Sea Wave» • Open Air 5.07.2003 • Evpatoriya "Solnishko" <br/>        
        «Rays of Love» •  26.04.2003 • Evpatoriya "Цивилизация" <br/>
        «Spring-A-Delica» Semi-C & Good Energy • 21.03.2003 • Simferopol "Metro" <br/>
        «Portal» • 16.03.2003 • Evpatoriya "Millenium" <br/>
        «Cosmic Wonderers» • 8.08.2003 • Evpatoriya "Millenium" <br/>
        «Summer Set» • 25.07.2003 • Evpatoriya "Solnishko" <br/>
        «Trance 2 Sun»  •  Open Air 26.06.2003 • Evpatoriya - "Solnishko"          <br/> 
        «Наши в Космосе» • 12.02.2002 • Evpatoriya "Millenium" <br/>
        «Arrival» • 9.02.2002 • Evpatoriya • "Klassik" <br/>
        «Back to the future»  • 27.04.2001 • Evpatoriya "Uranium 92"<br/>
        
    </p> 
                   
       </div>
       <br/>
       <br/>

    

    
     
    <div className={styles.textCenter}>
      <br/>
      <Link to="/">Go back </Link>
    </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Events page" />

export default eventsPage
