import * as React from "react"
import { Link } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { Container } from "react-bootstrap";

const dezzert_immaterialPage = () => (
  <Layout>   
      
        <p className={styles.nameRelease}>DEZERT - IMMATERIAL WISHES</p>      
        
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>                          
           <iframe className={styles.framebandcamp} title="Bancamp music Skygravity records Dezzert Immaterial Wishes" src="https://bandcamp.com/EmbeddedPlayer/track=1265567401/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://skygravityrecords.bandcamp.com/track/immaterial-wishes-16-bit">Immaterial Wishes [16 bit] by Dezzert</a></iframe>
        </Container>         
         </div>
         <div className={styles.sidebar}>

         <StaticImage
         placeholder="blurred"
         src="../images/dezzert.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '0px'}}
         />  <br/>
          <p className={styles.descriptionTxt}>
          A moment alone with a loved one. Feel the breeze high in the mountains, and singing. Run next to your animal company smiling with joy. Being tired knowing that the reason was healthy or profitable for those around you and/or for you.
              They are just some of the immaterial desires that motivate us to keep going no matter what, because we are stronger than a bad and unwanted situation.

              Un momento a solas con un ser querido. Sentir la brisa en lo alto de las montanas, y cantando. Correr al lado de tu compania animal sonriendo de alegria. Estar cansado sabiendo que la razon fue saludable o aprovechable para lxs que te rodean yo para ti.
              Son solo algunos de los deseos inmateriales que nos motivan a seguir adelante pase lo que pase, porque somos mas fuertes que una mala y no deseada situacion.
              <br/><br/>
              Хвилинка наодинці з коханою людиною. Відчуйте вітер високо в горах і спів. Біжіть поруч зі своєю твариною компанією, посміхаючись від радості. Втомлюючись, знаючи, що причина була здоровою чи вигідною для оточуючих та для вас.
              Це лише деякі нематеріальні бажання, які спонукають нас продовжувати рухатися, незважаючи ні на що, тому що ми сильніші за погану та небажану ситуацію.

              Dezzert - Immaterial Wishes - 149 BPM - F#                    
           
              Released by:
              Skygravity Records
              Release date:
              29 December 2020
          </p>
          <br/><br/>
          Compiled by Cifroteca<br/>
          Mastered by Plus Six Mastering<br/>
          Cover by Quiazma Arts  <br/>
          Thnaks for support Dj Alienoxx<br/>
          Release date: 29 december 2020
                    </div> 
              </div> 
 

    <div className={styles.textCenter}>
    <Link to="/releases/">Go back</Link>
    </div>

   
  </Layout>
)

export const Head = () => <Seo title="Dezzert Immaterial Wishes" />

export default  dezzert_immaterialPage



 
  
