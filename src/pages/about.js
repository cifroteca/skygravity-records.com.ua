import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <h1>Skygravity Records</h1>
    <p>Skygravity Records independent record label specializing in psychedelic trance music. The name of the label comes from the name of the Skygravity festival which took place in 2005 in the Crimea and united all Ukrainian psytrance promo groups. The first Skygravity compilation was the first compilation of Ukrainian musicians in a psychedelic trance scene and was founded in 2006
The label was created to support musicians and producers from all over the world,
search wonderful rhythms and mystical sounds and collecting high-quality psytrance dance music.
</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="About page" />

export default AboutPage
