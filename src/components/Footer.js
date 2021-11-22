import React from "react"
import styled from "styled-components"

const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
  word-break: keep-all;
`

const Footer = ({ className }) => {
  return (
    <StyledFooter className={className}>
      <div>
        ©
        <a
          href="https://github.com/nomorebuild"
          target="_blank"
          rel="noopener noreferrer"
        >
          Woolim lee
        </a>{" "}
        Built with{" "}
        <a
          href="https://github.com/gatsbyjs/gatsby-starter-blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby Starter Blog
        </a>
      </div>
    </StyledFooter>
  )
}

export default Footer
