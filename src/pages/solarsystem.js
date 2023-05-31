import * as React from "react"
import { Link } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


import { Container } from "react-bootstrap";



const solarsystemPage = () => (
  <Layout>
       
           <p className={styles.nameRelease} >Skygravity Vol.2 - Solar System</p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>      
                 <iframe  className={styles.framebandcamp} title="Solar system - Bancamp music "src="https://bandcamp.com/EmbeddedPlayer/album=2228168007/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="https://skygravityrecords.bandcamp.com/album/skygravity-vol-2-solar-system">Skygravity Vol.2 - Solar System by Skygravity records</a></iframe>
        </Container>
                        
         {/*  style="border: 0; width: 400px; height: 472px;" */}
         </div>
         <div className={styles.sidebar}>

         <StaticImage
         placeholder="blurred"
         src="../images/solarsystem.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '0px'}}
         />  <br/>
          <p className={styles.descriptionTxt}>
          is the second psychedelic trance compilation of Ukrainian electronic music scene.
Every July we arrange Sky Gravity festival at the Crimean coast of the Black sea in Ukraine
- It is the most bright, colorful and dynamic musical event of the year, which attracts psymusic
-lovers from the whole country and foreign guests as well. Compilation consists of the best tracks
created by Ukrainian and Russian artists, showing the diversity, originality and violent evolution
of the scene we can observe today. It brings a particle of the festival s atmosphere:
ou ll be engrossed by the vortex of the night dances, have the possibility to contemplate
the rays of the morning Sun, hear the songs of the magic birds and sea breakers.
Skygravity Records is a new Ukrainian psy label founded to support new talented artists
and to maintain the development of new advanced directions of psytrance music.
We are grateful for your choice of buying the licensed CD and for the great support
of our young label. Have a pleasant listening and true emotions:
let s meet at Sky Gravity dancefloor!
</p>
<br/><br/>
Compiled by Dj Jet<br/>
Mastered by Neoris<br/>
Cover by 604 Design    <br/>
15 December 2007     <br/>

          </div> 
     </div> 
 

<div className={styles.textCenter}>
<Link to="/releases/">Go back to Releases page</Link>
</div>

  

   
  </Layout>
)

export const Head = () => <Seo title="Skygravity" />

export default solarsystemPage



 
  
