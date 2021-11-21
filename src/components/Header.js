import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

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

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0px;
    left: 0;
    background-color: #000000;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const StyledLink = styled(Link)`
  font-family: "Noto Serif KR", serif;
  line-height: 1.5;
`

// 메뉴 Link 스타일
const MenuLink = styled(Link)`
  @keyframes fade-in {
    0%,
    20% {
      opacity: 0;
      top: 50px;
    }
    80%,
    100% {
      opacity: 1;
      top: 0px;
    }
  }

  font-family: "Noto Serif KR", serif;
  font-size: 2.986rem;
  margin-bottom: 20px;
  overflow: hidden;
  display: inline;
  position: relative;
  animation: ${props =>
    props.toggle === "true" ? `fade-in ${props.delay}s` : ""};
  ${props => (props.toggle === "false" ? "opacity: 0" : "")};
  transition: 0.4s opacity;
  line-height: 1.3;
`

const Header = () => {
  // 메뉴 토글 제어
  const [toggle, setToggle] = useState(false)

  const toggleMenu = condition => {
    typeof condition === "boolean" ? setToggle(condition) : setToggle(!toggle)
  }

  return (
    <>
      <HeaderWrapper>
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
          toggle={toggle.toString()}
          onClick={toggleMenu}
          delay={1}
          to="/about-me"
        >
          자기소개
        </MenuLink>
        <MenuLink
          toggle={toggle.toString()}
          onClick={toggleMenu}
          delay={1.2}
          to="/blog"
        >
          블로그
        </MenuLink>
        <MenuLink
          toggle={toggle.toString()}
          onClick={toggleMenu}
          delay={1.4}
          to="/portfolio"
        >
          작업물
        </MenuLink>
        <MenuLink
          toggle={toggle.toString()}
          onClick={toggleMenu}
          delay={1.6}
          to="/contact"
        >
          연락
        </MenuLink>
      </MenuContainer>
    </>
  )
}

export default Header
