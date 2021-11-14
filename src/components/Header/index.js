import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 40px;

  @media only screen and (max-width: 1280px) {
    padding: 10px 20px;
  }
`

const Header = props => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`

  console.log(props)

  return (
    <HeaderWrapper>
      <Link to="/">NMB</Link>
    </HeaderWrapper>
  )
}
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Header
