import * as React from "react"
import Seo from "../components/Seo"
import styled from "styled-components"

const AboutMeHeader = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const AboutMeHeaderText = styled.div`
  display: flex;
  flex-direction: column;
`

const AboutMeBody = styled.div`
  p {
    margin-bottom: 0.8rem;
  }
`

const ProfileImage = styled.img`
  width: 200px;
  height: 250px;
  position: relative;
  object-fit: cover;
  margin-right: 20px;
`

const AboutMe = () => {
  return (
    <>
      <Seo title="자기소개" />
      <AboutMeHeader className="about-me">
        <ProfileImage
          src="https://placeimg.com/640/480/any"
          alt="about-me-profile"
        />
        <AboutMeHeaderText>
          <h1>프론트엔드 개발자 이우림입니다.</h1>
          <p>
            배움에 한계가 없다고 생각하며 배운 것을 기반으로 나은 서비스를
            만들고 개선하기 위해 노력하고 있습니다.
          </p>
        </AboutMeHeaderText>
      </AboutMeHeader>
      <AboutMeBody>
        <h2>연락처</h2>
        <h2>사용 기술</h2>
        <h2>경력</h2>
        <h3>피에스알미디어</h3>
        <h4>PICLICK 코디매니저</h4>
        <p>
          쇼핑몰의 상품에 코디 된 상품이 있다면 AI 이미지 매칭을 이용하여 코디
          된 상품을 추천하는 솔루션 입니다.
        </p>
        <h4>PICLICK 솔루션 어드민 개발</h4>
        <p>
          PICLICK의 추천 솔루션을 이용하여 발생한 매출, 추천 상태를 확인하는
          대시보드 입니다.
        </p>
        <h4>PICLICK 서비스 '품절 대체 솔루션' 개발</h4>
        <p>
          쇼핑몰의 상품이 품절 되었다면 고객에게 메시지를 보낸 뒤 교환을
          유도하는 추천 솔루션 입니다.
        </p>
        <ul>
          <li>상품 추천 페이지 개발</li>
          <li>JavaScript 기반에서 TypeScript 기반 리팩토링</li>
          <li>사용 기술: TypeScript, Scss, Webpack</li>
        </ul>
        <h2>학력</h2>
        <h3>송파공업고등학교</h3>
      </AboutMeBody>
    </>
  )
}

export default AboutMe
