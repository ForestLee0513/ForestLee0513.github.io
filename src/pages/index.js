import * as React from "react"
import Seo from "../components/Seo"
import styled from "styled-components"
import indexForestImage from "../images/index-forest.jpg"
import Footer from "../components/Footer"

const IndexContainer = styled.div`
  .index-footer {
    position: absolute;
    bottom: 1rem;
    right: 0;
    left: 0;
    padding-top: 0;
    padding-bottom: 0;
  }

  position: fixed;
  width: 100%;
  height: calc(100% - calc(env(safe-area-inset-bottom) + 1rem));
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  width: 700px;
  // 모바일 컨테이너 width 90%로 고정
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`

const IndexImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`

const ForestImageGroup = styled.div`
  width: 100%;
  height: 80%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url(${indexForestImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: grayscale(100%);
  flex-direction: column;
  position: relative;
`

const Title = styled.div`
  font-family: "Noto Serif KR", serif;
  p {
    font-family: "Noto Serif KR", serif;
    display: inline-block;
    user-select: none;
  }
  font-size: 2.986rem;
  user-select: none;
  line-height: 1.5;
`

const InnerTitleContainer = styled.b`
  float: left;
  overflow: hidden;
  position: relative;
  user-select: none;
  @media only screen and (max-width: 768px) {
    height: 62px;
  }
  @media only screen and (min-width: 768px) {
    height: 71px;
  }
`

const InnerTitle = styled.div`
  @media only screen and (max-width: 768px) {
    @keyframes move {
      /* mobile */
      0% {
        top: 0px;
      }
      20% {
        top: -62px;
      }
      40% {
        top: -124px;
      }
      60% {
        top: -186px;
      }
    }
    animation: move 8s infinite;
  }
  @media only screen and (min-width: 769px) {
    @keyframes move {
      /* mobile */
      0% {
        top: 0px;
      }
      20% {
        top: -71px;
      }
      40% {
        top: -142px;
      }
      60% {
        top: -213px;
      }
    }
    animation: move 8s infinite;
  }
  font-family: "Noto Serif KR", serif;
  display: inline-block;
  position: relative;
  white-space: nowrap;
  top: 0;
  left: 0;
`

const Index = () => {
  return (
    <IndexContainer>
      <Seo title="홈" />
      <IndexImageContainer>
        <ForestImageGroup>
          <Title>
            <InnerTitleContainer>
              <InnerTitle>
                열정
                <br />
                노력
                <br />
                정성
                <br />
                감성
                <br />
              </InnerTitle>
            </InnerTitleContainer>
            을
            <br />
            더하다
          </Title>
        </ForestImageGroup>
      </IndexImageContainer>
      <Footer className="index-footer" />
    </IndexContainer>
  )
}

export default Index
