import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "react-bootstrap";
import * as styles from "../components/index.module.css"

const SecondPage = () => (
  <Layout>
    <h1>Hi from the Artists</h1>
    <p>Welcome to Artists</p>
    <div >
      <Container>      
               <iframe className={styles.framebandcamp} title="Bancamp music" src="https://bandcamp.com/EmbeddedPlayer/album=660142136/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="https://skygravityrecords.bandcamp.com/album/skygravity">Skygravity by Skygravity records</a></iframe>
            
               <iframe className={styles.framebandcamp} title="Bancamp music" src="https://bandcamp.com/EmbeddedPlayer/album=660142136/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="https://skygravityrecords.bandcamp.com/album/skygravity">Skygravity by Skygravity records</a></iframe>
      </Container>
        </div>

        <Container>      
               <iframe className={styles.framebandcamp} title="Bancamp music" src="https://bandcamp.com/EmbeddedPlayer/album=660142136/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="https://skygravityrecords.bandcamp.com/album/skygravity">Skygravity by Skygravity records</a></iframe>
        </Container>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
