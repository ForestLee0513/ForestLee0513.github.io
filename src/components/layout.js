import * as React from "react"
import Header from "./Header"
import styled from "styled-components"

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 40px;
`

const Layout = ({ location, children, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  console.log(title)

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />
      <MainWrapper>{children}</MainWrapper>
    </div>
  )
}

export default Layout
