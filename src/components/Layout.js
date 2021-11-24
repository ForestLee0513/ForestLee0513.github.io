import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"
import GlobalStyle from "./GlobalStyle"
import { Transition, TransitionGroup } from "react-transition-group"

// Main Container
const MainWrapper = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  padding-top: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 700px;
  position: relative;

  // 모바일 컨테이너 width 90%로 고정
  @media only screen and (max-width: 768px) {
    width: 90%;
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
            <MainWrapper className={`page ${status}`}>
              {children}
              {location.pathname !== "/" ? <Footer /> : ""}
            </MainWrapper>
          )}
        </Transition>
      </TransitionGroup>
    </>
  )
}

export default Layout
