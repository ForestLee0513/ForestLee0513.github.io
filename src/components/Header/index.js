import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  // 모바일 일 때 좌우 간격을 20px로 조정
  @media only screen and (max-width: 1280px) {
    padding: 0 20px;
  }
`

const Header = props => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <HeaderWrapper>
      <Link to="/">메뉴</Link>
      <Link to="/">홈</Link>
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
