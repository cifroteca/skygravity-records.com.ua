import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Header from "./header"
import Facebooklink from '../images/logo/fb.png'
import bandcamp from '../images/logo/bandcamp.jpg'
import soundcloud from '../images/logo/soundcloud.png'
import youtubelink from '../images/logo/youtube.png'
import junolink from '../images/logo/junodownload.png'
import instagram from '../images/logo/instagram.png'
import discogs from '../images/logo/discogs.png'
import beatport from '../images/logo/beatport.png'
import patreon from '../images/logo/patreon.png'
import mixcloud from '../images/logo/mixcloud.png'
import "./layout.css"
import * as styles from "../components/index.module.css"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
            textAlign: "center",
          }}
        >    
        
        <br/>
             <Link to="https://skygravityrecords.bandcamp.com/" >
              <img className={styles.footerpiclink} src={bandcamp} alt="Bandcamp Skygravity records"/> 
            </Link>
            <Link to="https://www.beatport.com/label/skygravity-records/113183" >
              <img className={styles.footerpiclink} src={beatport} alt="Beatport Skygravity records"/> 
            </Link>
            <Link to="https://soundcloud.com/skygravityrecords" >
              <img className={styles.footerpiclink} src={soundcloud} alt="Sound Cloud Skygravity records"/> 
            </Link>
            <Link to="https://www.mixcloud.com/Cifroteca/" >
              <img className={styles.footerpiclink} src={mixcloud} alt="Mix Cloud Skygravity records"/> 
            </Link>
            
            <Link to="https://www.facebook.com/skygravityrecords" >
              <img className={styles.footerpiclink} src={Facebooklink} alt="Facebook Skygravity records"/> 
            </Link>
            <Link to="https://www.youtube.com/@skygravityrecords" >
              <img className={styles.footerpiclink} src={youtubelink} alt="Youtube Skygravity records"/> 
            </Link>
            <Link to="https://www.junodownload.com/labels/Skygravity/" >
              <img className={styles.footerpiclink} src={junolink} alt="Juno Download Skygravity records"/> 
            </Link>
            <Link to="https://www.instagram.com/skygravity_records/" >
              <img className={styles.footerpiclink} src={instagram} alt="Instagram Skygravity records"/> 
            </Link>
            <Link to="https://www.discogs.com/ru/label/69484-Skygravity-Records" >
              <img className={styles.footerpiclink} src={discogs} alt="Discogs Skygravity records"/> 
            </Link>
            <Link to="https://www.patreon.com/skygravityrecords" >
              <img className={styles.footerpiclink} src={patreon} alt="Patreon Skygravity records"/> 
            </Link>
            <br/>

          
          {`   `}
        {/*   <a href="https://www.facebook.com/skygravityrecords">Facebook</a> */}           
        <br/>
                    

        </footer>
          <div className={styles.textCenter}>
            © {new Date().getFullYear()} &middot; Skygravity records
          </div>
      </div>
    </>
  )
}

export default Layout
