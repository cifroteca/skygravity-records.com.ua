import * as React from "react"
import { Link } from "gatsby"
import SkygravityHeader from '../images/banner_skygravity.png'

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
     
      <img src={SkygravityHeader} alt="Skygravity records"/> 
    </Link>
  </header>
)

export default Header
