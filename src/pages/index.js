import * as React from "react"
import Seo from "../components/Seo"
import styled from "styled-components"
import indexForestImage from "../images/index-forest.jpg"
import Footer from "../components/Footer"
import { usePointerPosition } from "../hooks/usePointerPosition"

const IndexImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  color: #000000;
`

const ForestImageGroup = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: grayscale(100%);
  flex-direction: column;
  position: relative;
  overflow: hidden;
`

const ForestImage = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url(${indexForestImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  width: 110%;
  height: 110%;
  transition: 0.1s transform;
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
  z-index: 2;
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
  const pointerPosition = usePointerPosition(true)

  return (
    <>
      <Seo title="홈" />
      <IndexImageContainer>
        <ForestImageGroup>
          <ForestImage
            style={{
              transform: `translate(${pointerPosition.x * 0.01}px, ${
                pointerPosition.y * 0.01
              }px)`,
            }}
          />
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
        <Footer className="index-footer" />
      </IndexImageContainer>
    </>
  )
}

export default Index
