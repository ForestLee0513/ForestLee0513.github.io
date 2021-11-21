import * as React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/Seo"
import styled from "styled-components"
import arrowImage from "../images/arrow.svg"

const StyledArticle = styled.article`
  padding-top: 20px;
  padding-bottom: 20px;

  h1 {
    margin-bottom: 0;
  }

  .date {
    margin-top: 10px;
    margin-bottom: 20px;
    color: #858585;
  }

  .gatsby-resp-image-wrapper {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

const Arrow = styled.img`
  margin-right: 10px;
  transform: translateY(1px)
    ${props =>
      props.direction === "right" ? "translateX(6px) rotate(180deg)" : ""};
`

const BlogNavContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const { previous, next } = data

  return (
    <>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <StyledArticle
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <Link to="/blog">
          <Arrow src={arrowImage} alt="arrow" />
          목록으로 이동
        </Link>
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p className="date">{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </StyledArticle>
      <hr />
      <BlogNavContainer>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/blog${previous.fields.slug}`} rel="prev">
                <Arrow src={arrowImage} alt="arrow" />
                {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title}{" "}
                <Arrow src={arrowImage} alt="arrow" direction="right" />
              </Link>
            )}
          </li>
        </ul>
      </BlogNavContainer>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
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
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
