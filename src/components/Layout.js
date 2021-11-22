import React from "react"
import Header from "./Header"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import { Transition, TransitionGroup } from "react-transition-group"

// Main Container
const MainWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 40px);
  padding-top: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 700px;
  position: relative;

  // 모바일 컨테이너 width 90%로 고정
  @media only screen and (max-width: 768px) {
    width: 90%;
  }

  &.page {
    overflow: hidden;
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
    word-break: break-all;
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
    line-height:1.5;
  }

  // Anchor global styles
  a {
    color: inherit;
    text-decoration: none;
    position : relative;
    color: #555555;
  }

  a:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(1);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #555555;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  a:hover:after {
    transform: scaleX(0);
    transform-origin: bottom left;
  }

  .page {
    top: 0;
    transition: 0.3s all;
  }

  .page.entered {
    position: relative;
    opacity: 1;
  }
  
  .page.entering,
  .page.exiting {
    opacity: 0;
    position: absolute;
    top: 0px;
    right: 0;
    bottom: 0;
    left: 0; 
    margin-left: auto;
    margin-right: auto;
    width: 700px;
    // 모바일 컨테이너 width 90%로 고정
    @media only screen and (max-width: 768px) {
      width: 90%;
    }
  }

  .page.entering {
    transform: translateY(-20px);
  }

  .page.exiting {
    transform: translateY(-20px);
  }
`

const Layout = ({ children, location }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TransitionGroup component={null}>
        <Transition key={location.pathname} timeout={{ enter: 300, exit: 300 }}>
          {status => (
            <MainWrapper className={`page ${status}`}>{children}</MainWrapper>
          )}
        </Transition>
      </TransitionGroup>
    </>
  )
}

export default Layout
