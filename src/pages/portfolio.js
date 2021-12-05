import * as React from "react"
import Seo from "../components/Seo"
import Footer from "../components/Footer"
import { Link, graphql } from "gatsby"

const Portfolio = ({ data }) => {
  console.log(data)
  return (
    <>
      <Seo title="작업물" />
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
