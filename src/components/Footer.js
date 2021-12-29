import React from "react"
import styled from "styled-components"
import Logo from "../images/logo.svg"

const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  word-break: keep-all;
  font-family: "Noto Sans KR", sans-serif;
`

const LogoContainer = styled.img`
  margin-bottom: 0.4rem;
  width: 48px;
  height: 48px;
  @media only screen and (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`

const Footer = ({ className }) => {
  return (
    <StyledFooter className={className}>
      <LogoContainer src={Logo} alt="logo" />
      <p>
        ©
        <a
          href="https://github.com/forestlee0513"
          target="_blank"
          rel="noopener noreferrer"
        >
          Woolim Lee
        </a>{" "}
        Built with{" "}
        <a
          href="https://github.com/gatsbyjs/gatsby-starter-blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby Starter Blog
        </a>
      </p>
    </StyledFooter>
  )
}

export default Footer
