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
  html, body {
    font-size: 16px;

    @media only screen and (max-width: 768px) {
      font-size: 14px;
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
    margin-bottom: 20px;
    line-height: 1.2;
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
