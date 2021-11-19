import React from "react"
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
  z-index: 2;
  // 모바일 일 때 좌우 간격을 20px로 조정
  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }
`

const MenuButton = styled.button`
  font-family: "Noto Serif KR", serif;
  border: none;
  background: none;
  dispaly: inilne-block;
  cursor: pointer;
  font-size: 1em;
`

const StyledLink = styled(Link)`
  font-family: "Noto Serif KR", serif;
`

const Header = ({ toggleMenu }) => {
  return (
    <HeaderWrapper>
      <MenuButton onClick={toggleMenu}>메뉴</MenuButton>
      <StyledLink to="/">홈</StyledLink>
    </HeaderWrapper>
  )
}

export default Header
