import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useScrollPosition } from "../hooks/useScrollPosition"

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  background-color: ${props =>
    props.scrollPosition > 40 && !props.$toggle ? "white" : ""};
  transition: all 0.4s;
  // 모바일 일 때 좌우 간격을 20px로 조정
  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }
`

// 메뉴 컨테이너
const MenuContainer = styled.div`
  // 너비, 높이, 위치 지정
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // 메뉴 토글 애니메이션
  transition: 0.8s transform;
  transition-delay: ${props => (props.toggle ? "" : "1s")};
  transform: ${props => (props.toggle ? "translateY(0)" : "translateY(-100%)")};

  transform-origin: 100% 0;
  // 배경
  background-color: #f7f7f7;
  // 정렬
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
`

const MenuButton = styled.button`
  font-family: "Noto Serif KR", serif;
  border: none;
  background: none;
  display: inilne-block;
  cursor: pointer;
  font-size: 1em;
  line-height: 1.5;
  position: relative;
  padding: 0;
  margin: 0;
  color: #000000;
  user-select: none;

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

const StyledLink = styled(Link)`
  font-family: "Noto Serif KR", serif;
  line-height: 1.5;
  color: #000000;
  user-select: none;
  background-image: linear-gradient(#000000, #000000);
`

// 메뉴 Link 스타일
const MenuLink = styled(Link)`
  @keyframes fade-in {
    0%,
    20% {
      clip-path: inset(100% 0 0 0);
    }
    80%,
    100% {
      clip-path: inset(0 0 0 0);
    }
  }

  @keyframes fade-out {
    0%,
    20% {
      clip-path: inset(0 0 0 0);
    }
    80%,
    100% {
      clip-path: inset(0 0 100% 0);
    }
  }

  font-family: "Noto Serif KR", serif;
  font-size: 2.986rem;
  margin-bottom: 20px;
  overflow: hidden;
  display: inline;
  position: relative;
  animation: ${props =>
    props.$toggle
      ? `fade-in ${props.$delay}s forwards`
      : `fade-out ${props.$delay}s forwards`};
  clip-path: ${props =>
    props.$toggle ? `inset(100% 0 0 0)` : "inset(0 0 0 0)"};
  animation-delay: ${props => (props.$toggle ? `0.5s` : "0")};
  line-height: 1.3;
  color: #000000;
  user-select: none;
  text-decoration: none;
  background-image: linear-gradient(#000000, #000000);
  background-position: 0% 100%;
  background-repeat: no-repeat;
`

const Header = () => {
  // 스크롤 위치
  const scrollPosition = useScrollPosition()
  // 메뉴 토글 제어
  const [toggle, setToggle] = useState(false)

  const toggleMenu = condition => {
    typeof condition === "boolean" ? setToggle(condition) : setToggle(!toggle)
  }

  return (
    <>
      <HeaderWrapper toggle={toggle} scrollPosition={scrollPosition}>
        <MenuButton onClick={toggleMenu}>메뉴</MenuButton>
        <StyledLink
          to="/"
          onClick={() => {
            toggleMenu(false)
          }}
        >
          홈
        </StyledLink>
      </HeaderWrapper>
      <MenuContainer toggle={toggle}>
        <MenuLink
          $toggle={toggle}
          onClick={toggleMenu}
          $delay={0.5}
          to="/about-me"
        >
          자기소개
        </MenuLink>
        <MenuLink $toggle={toggle} onClick={toggleMenu} $delay={1} to="/blog">
          블로그
        </MenuLink>
        <MenuLink
          $toggle={toggle}
          onClick={toggleMenu}
          $delay={1.5}
          to="/portfolio"
        >
          작업물
        </MenuLink>
      </MenuContainer>
    </>
  )
}

export default Header
