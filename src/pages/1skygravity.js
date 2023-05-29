import * as React from "react"
import { Link } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import { Container } from "react-bootstrap";



const skygravityPage = () => (
  <Layout>
    <div className={styles.textCenter}>
    <h1>SKYGRAVITY</h1>\
    </div>

    <StaticImage
         placeholder="blurred"
         src="../images/skygravity.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '15px'}}
         /> 

 <div className={styles.framebandcamp}>
  <Container>      
        <iframe title="Bancamp music" src="https://bandcamp.com/EmbeddedPlayer/album=660142136/size=large/bgcol=ffffff/linkcol=7137dc/artwork=small/transparent=true/" seamless><a href="https://skygravityrecords.bandcamp.com/album/skygravity">Skygravity by Skygravity records</a></iframe>                   
   </Container>
   </div>
     
                
         {/*  style="border: 0; width: 400px; height: 472px;"  */}

         <div className={styles.textCenter}>
          
      Skygravity – the first psychedelic trance compilation of Ukrainian electronic music scene.
Every year, in July at the Crimean coast of Black sea in Ukraine we arrange “Sky Gravity” festival – 
the most bright, colorful and dynamic musical event of the year, which attracts psymusic-lovers from the whole country and foreign guests as well.
Compilation consists of the best tracks of Ukrainian artists, showing the diversity, 
originality and violent evolution of the scene we can observe today. It brings a particle of the festival’s 
atmosphere: you’ll be engrossed in the vortex of the night dance, contemplate the rays of the morning Sun, 
hear the songs of the magic birds and sea breakers…
The most of the projects in this compilation have been never released before. Skygravity Records 
– new Ukrainian psy label founded to support new talented artists and development 
of new advanced directions of trance music.
We are thankful for your choice to buy licensed CD and for the great support of our young label. 
Have a pleasant listening and true emotions: let’s meet at “Sky Gravity” dancefloor!
     </div>

Artwork by Kadasarva
Mastering by Dmitriy Volkov
Compiled by Orbal & Jet
credits
released July 15, 2006<br/>

  

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Skygravity" />

export default skygravityPage



 
  
