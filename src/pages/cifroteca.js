import * as React from "react"
import { Link } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { Container } from "react-bootstrap";


const cifrotecaPage = () => (
  <Layout>       
           <p className={styles.nameRelease}>CIFROTECA - Album</p>      
         
           <div className={styles.main}>
           <div className={styles.main_content}>
                            
              <Container>                                                           
                <iframe className={styles.framebandcamp} title="Bancamp music Skygravity records - Cifroteca" src="https://bandcamp.com/EmbeddedPlayer/album=1805665640/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="https://skygravityrecords.bandcamp.com/album/cifroteca-24-bit">Cifroteca [24 bit] by Cifroteca</a></iframe>
              </Container>         
              </div>
              <div className={styles.sidebar}>

              <StaticImage
              placeholder="blurred"
              src="../images/cifroteca.jpg"
              width={500}
              quality={80}
              formats={["AUTO","WEBP","AVIF"]}
              alt="A gatsby strinaut"
              style={{margin: '0px'}}
              />  <br/>
                <p className={styles.descriptionTxt}>
                We wanted to present to your attention the First album of the world-famous underground project Cifroteca (based in Ukraine).
                  Drop yourself into a space journey through the galaxy of dreams,
                  Fuel up starship's tanks with the energetic basses, connect the mystic rhythms to the navigation panel.
                  Get ready to walk through the incredible worlds by passing through the portals of musical illusions.
                  Let your fantasies vibrate in a rhythm of your heartbeat.            

                </p>
                <br/><br/>
                Write and Produced Iofik Yuriy<br/>
                Mastered by Seres Studio<br/>
                Cover by TrasherUA  <br/>
                Release date: 23 March 2022
           </div> 
          </div>       

          <div className={styles.textCenter}>
            <Link to="/releases/">Go back</Link>
          </div>   
  </Layout>
)

export const Head = () => <Seo title="Cifroteca" />

export default cifrotecaPage



 
  
