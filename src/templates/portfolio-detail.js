import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import arrowImage from "../images/arrow.svg"

const ArrowLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  background-image: linear-gradient(#000000, #000000);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s;
  display: flex;
  align-items: flex-start;

  &:hover {
    background-size: 100% 2px;
  }

  &.move-to-list {
    display: inline-block;
    margin-top: 0;
    img {
      transform: translateY(1px);
    }
  }
`

const Arrow = styled.img`
  margin-right: 10px;
  margin-top: 2px;
  ${props =>
    props.direction === "right"
      ? "transform: translateX(6px) rotate(180deg)"
      : ""};
`

const PortfolioDetail = ({ data }) => {
  return (
    <>
      <ArrowLink to="/portfolio" className="move-to-list">
        <Arrow src={arrowImage} alt="arrow" />
        목록으로 이동
      </ArrowLink>
      <div>test</div>
    </>
  )
}

export default PortfolioDetail

export const pageQuery = graphql`
  query portfolioDetailQuery($id: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일")
        description
        thumbnail {
          publicURL
        }
      }
    }
  }
`
