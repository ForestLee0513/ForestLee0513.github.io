import * as React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/Seo"
import styled from "styled-components"
import arrowImage from "../images/arrow.svg"

const StyledArticle = styled.article`
  padding-top: 20px;
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

    a:after {
      width: 0;
    }

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }

  // break 된 paragraph의 하단 간격
  p {
    margin-bottom: 0.8rem;
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

const ArrowLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  background-image: linear-gradient(#000000, #000000);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s;

  &:hover {
    background-size: 100% 2px;
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
        <ArrowLink to="/blog">
          <Arrow src={arrowImage} alt="arrow" />
          목록으로 이동
        </ArrowLink>
        <header>
          <h1 className="headline">{post.frontmatter.title}</h1>
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
              <ArrowLink to={`/blog${previous.fields.slug}`} rel="prev">
                <Arrow src={arrowImage} alt="arrow" />
                {previous.frontmatter.title}
              </ArrowLink>
            )}
          </li>
          <li>
            {next && (
              <ArrowLink to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title}{" "}
                <Arrow src={arrowImage} alt="arrow" direction="right" />
              </ArrowLink>
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
