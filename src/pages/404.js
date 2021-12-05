import * as React from "react"
import styled from "styled-components"
import notFoundIcon from "../images/404-icon.svg"
import Seo from "../components/Seo"
import Footer from "../components/Footer"
import { Link } from "gatsby"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  color: #000000;
`

const Hairline = styled.hr`
  width: 100%;
  margin: 20px 0;
`

const SiteMapGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: auto;
  flex-grow: 1;
`

const SiteMapList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;

  li {
    margin: 0 10px;
  }
`

const NotFoundPage = () => {
  return (
    <>
      <Seo title="404: Not Found" />
      <Container>
        <SiteMapGroup>
          <img
            src={notFoundIcon}
            alt="not-found-icon"
            width={240}
            height={240}
          />
          <Hairline />
          <SiteMapList>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/about-me">자기소개</Link>
            </li>
            <li>
              <Link to="/blog">블로그</Link>
            </li>
            <li>
              <Link to="/contact">연락</Link>
            </li>
          </SiteMapList>
        </SiteMapGroup>
        <Footer />
      </Container>
    </>
  )
}

export default NotFoundPage
