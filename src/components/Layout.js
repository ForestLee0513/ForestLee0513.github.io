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

  // Body 기준 폰트 적용
  body, button {
    font-size: 16px;
  }
  
  // Anchor global styles
  a {
    color: inherit;
    text-decoration: none;
  }

  // Heading Font Styles
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Noto Serif KR', serif;
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
`

// 메뉴 Link 스타일
const MenuLink = styled(Link)`
  font-family: "Noto Serif KR", serif;
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
        <MenuLink to="/test">안녕하세요</MenuLink>
      </MenuContainer>
      <MainWrapper>{children}asdf</MainWrapper>
    </>
  )
}

export default Layout
