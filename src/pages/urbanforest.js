import * as React from "react"
import { Link } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { Container } from "react-bootstrap";



const UrbanForestPage = () => (
  <Layout>            
           <p className={styles.nameRelease} >Urban Forest </p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>      
          <iframe  className={styles.framebandcamp} title="Bancamp music Skygravity records Urban Forest"src="https://bandcamp.com/EmbeddedPlayer/album=198054938/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="https://skygravityrecords.bandcamp.com/album/urban-forest">Urban Forest by Skygravity records</a></iframe>
        </Container>
                        
         {/*  style="border: 0; width: 400px; height: 472px;" */}
         </div>
         <div className={styles.sidebar}>

         <StaticImage
         placeholder="blurred"
         src="../images/urbanforest.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="Urban Forest"
         style={{margin: '0px'}}
         />  <br/>
          <p className={styles.descriptionTxt}>
          More and more people intrude into the forest life, affecting both anumls,
plants and ourselves as well.The number of those who don't pick up the
rubbish after having a rest in the nature grows. And we can just think
bout how we can stop it. It will be stopped only then, when we have
nothing to breath with, some people say.However there is way out -
the cities should be turned to gardens by planting as much of green
plants as possible, by supporting the symbois of people and nature.
The children should be rised with an understand of love and care
towards nature. Just imagine the city with the gardens on the
skyscraper roofs, with grassy sidewalks and park zones.
</p>
<br/><br/>
Compiled by <br/>
Mastered by Nahati records<br/>
Cover by Anix Gleo   <br/>
15 December 2007     <br/>
Release date: 1 October 2010
          </div> 
     </div> 
 

<div className={styles.textCenter}>
<Link to="/releases/">Go back</Link>
</div>

  

   
  </Layout>
)

export const Head = () => <Seo title="Skygravity" />

export default UrbanForestPage



 
  
