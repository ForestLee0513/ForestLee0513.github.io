import React, { useRef, useEffect, useState, useCallback } from "react"
import styled, { css } from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { isBrowser } from "react-device-detect"
import { debounce } from "../utils/debounce"
import { Link } from "gatsby"

const ListContainer = styled.ul`
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  list-style: none;
  flex: 1;
  display: flex;
  align-items: center;
  overflow-x: ${props => (props.$isBrowser ? "hidden" : "scroll")};

  * {
    ${props => props.$isScroll && "pointer-events: none;"}
  }
`

const ListItem = styled.li`
  @media only screen and (max-width: 768px) {
    width: 200px;
  }
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding: 10px;
  transition: all 0.4s;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  a {
    background: unset;
  }

  &:first-of-type {
    margin-left: 40px;
  }

  &:last-of-type {
    margin-right: 40px;
  }

  h4 {
    margin-bottom: 0;
  }

  h3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-bottom: 0;
  }

  @media only screen and (max-width: 768px) {
    &:first-of-type {
      margin-left: 20px;
    }

    &:last-of-type {
      margin-right: 20px;
    }
  }
`

const ListHairline = styled.hr`
  width: 15%;
  margin-left: 0;
  border: none;
  height: 1px;
  background-color: black;
`

const TagText = styled.span`
  color: #777777;
  margin-right: 4px;
`

// 포트폴리오용 리스트 랜더링
const List = ({ items }) => {
  const listRef = useRef() // 리스트 컨테이너 ref (ref로 지정 안하면 event target이 변경돼서 scrollLeft 사용 불가)
  const [isScroll, setIsScroll] = useState(false) // 스크롤 여부

  // 가로 휠 스크롤
  const horizontalScroll = useCallback(event => {
    event.preventDefault()
    // 스크롤 위치 변경
    event.target.scrollLeft += event.deltaY

    // 스크롤 여부 제어
    setIsScroll(true)
    debounce(() => {
      setIsScroll(false)
    }, 500)
  }, [])

  useEffect(() => {
    // 브라우저 일때만 커스텀 스크롤 이벤트 적용
    if (isBrowser) {
      listRef.current?.addEventListener("wheel", horizontalScroll)
    }

    // cleanup
    return () => {
      setIsScroll(false)
      listRef.current = null
    }
  }, [horizontalScroll])

  return (
    <ListContainer ref={listRef} $isScroll={isScroll} $isBrowser={isBrowser}>
      {items.map((item, index) => {
        const title = item.frontmatter.title // 제목
        const thumbnail = getImage(item.frontmatter.thumbnail) // 썸네일
        const date = item.frontmatter.date // 날짜
        const tags = item.frontmatter.tags // 태그
        const formattedNumber = index + 1 < 10 ? `0${index + 1}` : index + 1 // 포트폴리오 번호 (1번부터 시작 / 10 이하일때 앞에 0 추가)
        const path = item.fields.slug

        return (
          <ListItem key={index}>
            <Link to={`/portfolio${path}`}>
              <h4>{formattedNumber}</h4>
              <GatsbyImage
                image={thumbnail}
                alt={title}
                css={css`
                  @media only screen and (max-width: 768px) {
                    min-width: 200px;
                    max-width: 200px;
                    min-height: 250px;
                    max-height: 250px;
                  }

                  display: block !important;
                  min-width: 300px;
                  max-width: 300px;
                  min-height: 350px;
                  max-height: 350px;
                  margin-bottom: 10px;
                `}
              />
              <h3>{title}</h3>
              <p>{date}</p>
              <ListHairline />
              {tags.map((tag, index) => (
                <TagText key={`${tag}-${index}`}>#{tag}</TagText>
              ))}
            </Link>
          </ListItem>
        )
      })}
    </ListContainer>
  )
}

export default List
