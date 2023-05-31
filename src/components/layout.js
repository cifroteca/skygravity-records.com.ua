import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import "./layout.css"
import Facebooklink from '../images/fb_icon_325x325.png'
import bandcamp from '../images/bandcamp.jpg'
import soundcloud from '../images/soundcloud.png'
import youtubelink from '../images/youtube.png'
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
            textAlign: "right",
          }}
        >
             <Link to="https://skygravityrecords.bandcamp.com/" >
              <img className={styles.footerpiclink} src={bandcamp} alt="Bandcamp Skygravity records"/> 
            </Link>
            <Link to="https://soundcloud.com/skygravityrecords" >
              <img className={styles.footerpiclink} src={soundcloud} alt="Sound Cloud Skygravity records"/> 
            </Link>
            
            <Link to="https://www.facebook.com/skygravityrecords" >
              <img className={styles.footerpiclink} src={Facebooklink} alt="Facebook Skygravity records"/> 
            </Link>
            <Link to="https://www.youtube.com/@skygravityrecords" >
              <img className={styles.footerpiclink} src={youtubelink} alt="Youtube Skygravity records"/> 
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
