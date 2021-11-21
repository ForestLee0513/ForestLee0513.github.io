import React from "react"
import Header from "./Header"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

// Main Container
const MainWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 40px);
  padding-top: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 700px;

  // 모바일 컨테이너 width 90%로 고정
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
  // 해상도가 1440px 일 때 1280px로 고정
  @media only screen and (min-width: 1440px) {
    width: 1280px;
  }
`

// GlobalStyles
const GlobalStyle = createGlobalStyle`
  // Reset all styles with "styled-reset"
  ${reset}

  // 기준 폰트 적용
  html, body {
    font-size: 16px;

    @media only screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
  
  // Heading Font Styles
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Noto Serif KR', serif;
    margin-bottom: 20px;
    line-height: 1.3;
    word-break: keep-all;
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

  // Paragraph Style
  p {
    font-family: 'Noto Sans KR', sans-serif;
  }

  // Anchor global styles
  a {
    color: inherit;
    text-decoration: none;
    position : relative;
  }

  a:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0px;
    left: 0;
    background-color: #000000;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  a:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const Layout = ({ children }) => {
  return (
    <MainWrapper>
      <GlobalStyle />
      <Header />
      {children}
    </MainWrapper>
  )
}

export default Layout
