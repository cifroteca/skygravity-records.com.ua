import * as React from "react"
import { Link } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { Container } from "react-bootstrap";



const nyons_having_fun_Page = () => (
  <Layout>           
           <p className={styles.nameRelease}>Igor Lse - Nyons having fun - EP</p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>                                                
           <iframe className={styles.framebandcamp} title="Bancamp music Skygravity records Igor LSE Nyon Having Fun" src="https://bandcamp.com/EmbeddedPlayer/album=3535811108/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="https://skygravityrecords.bandcamp.com/album/nyons-having-fun">Nyons having fun by Igor Lse</a></iframe>
        </Container>         
         </div>
         <div className={styles.sidebar}>

         <StaticImage
         placeholder="blurred"
         src="../images/nyonshavingfun.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '0px'}}
         />  <br/>
          <p className={styles.descriptionTxt}>
          We present to your attention a new EP from IGOR LSE, a talented musician 
          from a very beautiful and small town of Nyon, France.
          This time Igor created three wonderful and powerful dance tracks.

          </p>
          <br/><br/>
          Write and Produced by Igor Blanchoz<br/>
          Mastered by Dimitro Zymosis<br/>
          Cover by Artrama  <br/>
          Thnaks for support Dj Alienoxx<br/>
          Release date: 27 January 2022
                    </div> 
              </div> 
 

    <div className={styles.textCenter}>
    <Link to="/releases/">Go back</Link>
    </div>

   
  </Layout>
)

export const Head = () => <Seo title="Skygravity" />

export default nyons_having_fun_Page



 
  
