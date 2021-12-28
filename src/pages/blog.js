import * as React from "react"
import Seo from "../components/Seo"
import { Link, graphql } from "gatsby"
import styled, { css } from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogListContainer = styled.div`
  width: calc(100% - 20px);
  column-count: 2;
  column-gap: 30px;

  @media only screen and (max-width: 768px) {
    column-count: 1;
  }

  h4 {
    margin-bottom: 0.6rem;
  }

  a {
    background: none;
    padding: 10px;
  }

  small,
  p {
    display: inline-block;
    color: #777777;
  }
`

const BlogItem = styled(Link)`
  display: inline-block;
  width: 100%;
  margin-bottom: 10px;
  transition: all 0.4s;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const PostDate = styled.small`
  margin-bottom: 1rem;
`

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <>
        <Seo title="블로그" />
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>현재 글이 존재하지 않습니다.</p>
        </div>
      </>
    )
  }

  return (
    <>
      <Seo title="블로그" />
      <h1>블로그</h1>
      <BlogListContainer>
        {posts.map((post, index) => {
          const title = post.frontmatter.title || post.fields.slug
          const thumbnail = getImage(post.frontmatter.thumbnail)

          return (
            <BlogItem
              to={`/blog${post.fields.slug}`}
              itemProp="url"
              key={post.fields.slug}
            >
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <h5>{index < 10 ? `0${index + 1}` : index + 1}</h5>
                <header>
                  {thumbnail && (
                    <GatsbyImage
                      image={thumbnail}
                      alt={`${post.frontmatter.title}-${index}`}
                      css={css`
                        display: block;
                        height: 100%;
                        margin-bottom: 10px;
                      `}
                    />
                  )}
                  <h4>
                    <span itemProp="headline">{title}</span>
                  </h4>
                  <PostDate>{post.frontmatter.date}</PostDate>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </BlogItem>
          )
        })}
      </BlogListContainer>
    </>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(blog)/" } }
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
