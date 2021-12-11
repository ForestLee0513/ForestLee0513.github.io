import * as React from "react"
import Seo from "../components/Seo"
import { graphql } from "gatsby"
import List from "../components/List"
import styled from "styled-components"
import Footer from "../components/Footer"

const PortfolioContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Portfolio = ({ data }) => {
  const portfolioItems = data.allMarkdownRemark.nodes

  return (
    <>
      <Seo title="작업물" />
      <PortfolioContainer>
        <List items={portfolioItems} />
        <Footer />
      </PortfolioContainer>
    </>
  )
}

export default Portfolio

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(portfolio)/" } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY년 MM월 DD일")
          title
          description
          tags
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
