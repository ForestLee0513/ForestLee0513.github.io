import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

// GlobalStyles
const GlobalStyle = createGlobalStyle`
  // Reset all styles with "styled-reset"
  ${reset}

  // 기준 폰트 적용
  html, body {
    font-size: 16px !important;
    height: ${props => props.height ?? 0}px;
    
    @media only screen and (max-width: 768px) {
      font-size: 14px !important;
    }
  }

  #___gatsby, div[tabindex] {
    height: 100%;
  }

  // Heading Font Styles
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Noto Serif KR', serif;
    margin-bottom: 20px;
    line-height: 1.3;
    word-break: break-all;
  }

  h1 {
    font-size: 3.583rem;
  }

  h2 {
    font-size: 2.986rem;
  }

  h3 {
    font-size: 1.728rem;
  }
  
  h4 {
    font-size: 1.44rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 1rem;
  }

  // Paragraph Style
  p {
    font-family: 'Noto Sans KR', sans-serif;
    line-height:1.5;
    color: #777777;
  }

  // Anchor global styles
  a {
    position : relative;
    color: #222222;
    text-decoration: none;
    background-image: linear-gradient(#222222, #222222);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    transition: background-size .3s;
  }

  a:hover {
    background-size: 0% 2px;
  }

  .page {
    top: 0;
    transition: 0.3s all;
  }

  .page.entered {
    position: relative;
    opacity: 1;
  }
  
  .page.entering,
  .page.exiting {
    opacity: 0;
    position: absolute;
    top: 0px;
    right: 0;
    bottom: 0;
    left: 0; 
    margin-left: auto;
    margin-right: auto;
    width: 700px;
    // 모바일 컨테이너 width 90%로 고정
    @media only screen and (max-width: 768px) {
      width: 90%;
    }
  }

  .page.entering {
    transform: translateY(-20px);
  }

  .page.exiting {
    transform: translateY(-20px);
  }
`

export default GlobalStyle
