import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import MultyCarouselBox from "../components/MultyCarouselBox";
import 'bootstrap/dist/css/bootstrap.min.css';


const IndexPage = () => {

   const samplePageLinks = [ 
    
     {
    text: "RELEASES",
    url: "releases",
    badge: false,
    description: "A simple example of about page",
  },
    {
    text: "ARTISTS",
    url: "artists",
    badge: false,
    description:  "A simple example of linking to another page within a Gatsby site",
  },
  {
    text: "ABOUT",
    url: "about",
    badge: false,
    description: "A simple example of about page",
  }
  /* {
    text: "MERCH",
    url: "merch",
    badge: false,
    description: "A simple example of about page",
  } */,
   {
    text: "STREAMING",
    url: "streaming",
    badge: false,
    description: "A simple example of about page",
  }, 
  {
    text: "EVENTS",
    url: "events",
    badge: false,
    description: "A simple example of about page",
  }  
 
]
    
return (

  <Layout>

    <div className={styles.textCenter}>
        <p className={styles.intro}>
       {" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        
        </p>
    </div>    

    
    <div className={styles.main}>
      
     <div className={styles.main_content}>       
   
       <p className={styles.descriptionMainTxt}>
       <h1 className={styles.nameNews}>Peace Love Ukraine Respect</h1>

        <span className={styles.descriptionTxt}>
        The best Ukrainian producers and musicians of psychedelic electronic music were involved in the compilation tracklist.<br/>

        <span className={styles.organization}> VA PLUR</span> [Peace Love Ukraine Respect] will be able to listen on all known platforms and free for downloading on Skygravity Records Bandcamp.
        <br/><br/>
        <span className={styles.organization}> VA PLUR</span> [Peace Love Ukraine Respect] will be available without charged pricing, instead of spending for purchasing, you can leave a donation of any amount for the funds' collection platform "United24", the Ukrainian official government's foundation to support fighting for Freedom and Peace and Demining our forests."
        </span>

       </p>
      
      </div>

      <Link to="/peace_love_ukraine_respect/"> 
      <StaticImage
        src="../images/plur.jpg"
        loading="eager"
        width={300}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      </Link>

      </div>

      <br/>
      <br/>
      <br/>
      

   <MultyCarouselBox />  
   

  </Layout>
)}

export const Head = () => <Seo title="Home"/>

export default IndexPage




