import * as React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/Seo"
import styled from "styled-components"
import arrowImage from "../images/arrow.svg"
import Footer from "../components/Footer"

const StyledArticle = styled.article`
  padding-bottom: 20px;

  .headline {
    margin-bottom: 0;
  }

  .date {
    margin-top: 10px;
    margin-bottom: 20px;
    color: #777777;
  }

  // 이미지
  .gatsby-resp-image-wrapper {
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 700px !important;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }

    a:after {
      width: 0;
    }
  }

  // break 된 paragraph의 하단 간격
  p {
    margin-bottom: 0.8rem;
    img {
      width: 100%;
    }
  }

  // Block Quote
  blockquote {
    border-left: 0.25rem solid #c9e95d;
    color: #555555;
    font-style: italic;
    padding: 0 0 0 1rem;
  }

  // Bold
  strong {
    font-weight: 700;
  }

  // Italic
  em {
    font-style: italic;
  }

  // code block
  .gatsby-highlight {
    margin-bottom: 0.8rem;
  }
`

const ArrowList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding-top: 20px;

  li {
    width: 50%;
    display: flex;

    &.next-item {
      justify-content: flex-end;
    }
  }
`

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

const BlogPostTemplate = ({ data }) => {
  const {
    frontmatter: { title, description, date, thumbnail },
    excerpt,
    html,
  } = data.markdownRemark
  const { previous, next } = data
  const {
    siteMetadata: { siteUrl },
  } = data.site

  return (
    <>
      <Seo
        title={title}
        description={description || excerpt}
        image={`${siteUrl}${thumbnail?.publicURL}` || ""}
      />
      <StyledArticle
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <ArrowLink to="/blog" className="move-to-list">
          <Arrow src={arrowImage} alt="arrow" />
          목록으로 이동
        </ArrowLink>
        <header>
          <h1 className="headline">{title}</h1>
          <p className="date">{date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: html }}
          itemProp="articleBody"
        />
      </StyledArticle>
      <hr />
      <ArrowList>
        <li>
          {previous && (
            <ArrowLink to={`/blog${previous.fields.slug}`} rel="prev">
              <Arrow src={arrowImage} alt="arrow" />
              {previous.frontmatter.title}
            </ArrowLink>
          )}
        </li>
        <li className="next-item">
          {next && (
            <ArrowLink to={`/blog${next.fields.slug}`} rel="next">
              {next.frontmatter.title}{" "}
              <Arrow src={arrowImage} alt="arrow" direction="right" />
            </ArrowLink>
          )}
        </li>
      </ArrowList>
      <Footer />
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
