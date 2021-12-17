import * as React from "react"
import Seo from "../components/Seo"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { useScrollPosition } from "../hooks/useScrollPosition"

// 자기소개 컨테이너
const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  transform: translateY(-10px);
  height: calc(100% + 10px);
  padding-left: 20px;
  padding-right: 20px;
  @media only screen and (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    height: auto;
    flex-direction: column;
    transform: none;
    padding-left: 0;
    padding-right: 0;
  }
`

// 자기소개 이미지
const AboutMeImage = styled.div`
  display: block !important;
  max-width: 500px;
  width: 100%;
  margin-right: 20px;
  height: 90%;
  margin-top: auto;
  margin-bottom: auto;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media only screen and (max-width: 768px) {
    height: 200px;
    max-width: unset;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 10px;
    background-size: 100%;
  }
`

// 자기소개 컨텐츠
const AboutMeContent = styled.div`
  display: block;
  overflow-y: scroll;
  padding-right: 20px;
  height: 90%;
  margin-top: auto;
  margin-bottom: auto;
  @media only screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    padding-right: 0;
    overflow: unset;
    width: 100%;
  }
`

// 자기소개 헤더
const AboutMeHeader = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

// 자기소개 소셜 링크
const SocialIcons = styled.div`
  margin-bottom: 0.8rem;
  a:not(:last-child) {
    margin-right: 0.8rem;
  }
`

// 자기소개 텍스트
const AboutMeHeaderText = styled.div`
  display: flex;
  flex-direction: column;
`

// 자기소개 경력 등 추가내용
const AboutMeBody = styled.div`
  //본문 하단 간격 추가
  p {
    margin-bottom: 0.8rem;
  }

  // 하단 간격 제거 클래스
  .remove__margin-bottom {
    margin-bottom: 0;
  }
`

const AboutMe = () => {
  const scrollPosition = useScrollPosition()

  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        // 소셜 목록(깃허브 / 페이스북 / 트위터 / 링크드인)
        const { social } = data.site.siteMetadata
        // 제목, 소개
        const {
          frontmatter: { title, description, thumbnail },
          html,
        } = data.allMarkdownRemark.nodes[0]

        return (
          <>
            <Seo title="자기소개" />
            <AboutMeContainer>
              <AboutMeImage
                src={thumbnail.publicURL}
                alt="about-me__thumbnail"
                style={{
                  backgroundPosition: `50% ${50 + scrollPosition * -0.1}%`,
                }}
              />
              <AboutMeContent>
                <AboutMeHeader className="about-me">
                  <AboutMeHeaderText>
                    <h1>{title}</h1>
                    <SocialIcons>
                      {social.github && (
                        <a
                          href={`https://github.com/${social.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      )}
                      {social.linkedin && (
                        <a
                          href={`https://linkedin.com/in/${social.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LinkedIn
                        </a>
                      )}
                      {social.facebook && (
                        <a
                          href={`https://facebook.com/${social.facebook}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Facebook
                        </a>
                      )}
                      {social.twitter && (
                        <a
                          href={`https://twitter.com/${social.twitter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Twitter
                        </a>
                      )}
                    </SocialIcons>
                    <p>{description}</p>
                  </AboutMeHeaderText>
                </AboutMeHeader>
                <hr />
                <AboutMeBody dangerouslySetInnerHTML={{ __html: html }} />
              </AboutMeContent>
            </AboutMeContainer>
          </>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        social {
          twitter
          github
          facebook
          linkedin
        }
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(__about)/" } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        html
        frontmatter {
          date(formatString: "YYYY년 MM월 DD일")
          title
          description
          thumbnail {
            publicURL
          }
        }
      }
    }
  }
`

export default AboutMe
