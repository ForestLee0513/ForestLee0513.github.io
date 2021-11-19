import * as React from "react"
import Header from "./Header"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset" // style-reset 패키지

// 메인 컨테이너
const MainWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 40px);
  padding-top: 40px;
`

// 전역 스타일 적용
const GlobalStyle = createGlobalStyle`
  ${reset}
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainWrapper>{children}</MainWrapper>
    </>
  )
}

export default Layout
