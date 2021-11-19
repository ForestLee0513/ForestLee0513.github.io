import React, { useState } from "react"
import Header from "./Header"
import { Link } from "gatsby"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

// Main Container
const MainWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 40px);
  padding-top: 40px;
`

// GlobalStyles
const GlobalStyle = createGlobalStyle`
  // Reset all styles with "styled-reset"
  ${reset}

  // 기준 폰트 적용
  html {
    font-size: 1em;

    @media only screen and (max-width: 1280px) {
      font-size: 0.875em;
    }
  }
  
  // Anchor global styles
  a {
    color: inherit;
    text-decoration: none;
  }

  // Heading Font Styles
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Noto Serif KR', serif;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 3.583rem;
  }

  h2 {
    font-size: 2.986rem;
  }

  h3 {
    font-size: 1.728rem;
  }
  
  h4 {
    font-size: 1.44rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 1rem;
  }
`

// 메뉴 컨테이너
const MenuContainer = styled.div`
  // 너비, 높이, 위치 지정
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // 메뉴 토글 애니메이션
  transition: 0.4s all;
  transform: ${props => (props.toggle ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: 100% 0;
  // 배경
  background-color: white;
  // 정렬
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

// 메뉴 Link 스타일
const MenuLink = styled(Link)`
  font-family: "Noto Serif KR", serif;
  font-size: 2.986rem;
  margin-bottom: 10px;
`

const Layout = ({ children }) => {
  // 메뉴 토글 제어
  const [toggle, setToggle] = useState(false)

  const toggleMenu = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <GlobalStyle />
      <Header toggleMenu={toggleMenu} />
      <MenuContainer toggle={toggle}>
        <MenuLink to="/test">자기소개</MenuLink>
        <MenuLink to="/test">블로그</MenuLink>
        <MenuLink to="/test">작업물</MenuLink>
        <MenuLink to="/test">연락</MenuLink>
      </MenuContainer>
      <MainWrapper>{children}</MainWrapper>
    </>
  )
}

export default Layout
