import React, { useRef, useEffect, useState, useCallback } from "react"
import styled, { css } from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { debounce } from "../utils/debounce"

const ListContainer = styled.ul`
  overflow-x: hidden;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  list-style: none;
  flex: 1;
  display: flex;
  align-items: center;

  * {
    ${props => props.$isScroll && "pointer-events: none;"}
  }
`

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-left: 20px;

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

// 포트폴리오용 리스트 랜더링
const List = ({ items }) => {
  const listRef = useRef()
  const [isScroll, setIsScroll] = useState(false)

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
    listRef.current?.addEventListener("wheel", horizontalScroll)

    return () => {
      setIsScroll(false)
      listRef.current = null
    }
  }, [horizontalScroll])

  return (
    <ListContainer ref={listRef} $isScroll={isScroll}>
      {items.map((item, index) => {
        const title = item.frontmatter.title
        const thumbnail = item.frontmatter.thumbnail
        const date = item.frontmatter.date
        const formattedNumber = index + 1 < 10 ? `0${index + 1}` : index + 1
        const remarkedThumbnail = getImage(thumbnail)

        return (
          <ListItem key={index}>
            <Link to="/">
              <h4>{formattedNumber}</h4>
              <GatsbyImage
                image={remarkedThumbnail}
                alt={title}
                css={css`
                  display: block !important;
                  min-width: 200px;
                  max-width: 200px;
                  min-height: 250px;
                  max-height: 250px;
                `}
              />
              <h3>{title}</h3>
              <p>{date}</p>
            </Link>
          </ListItem>
        )
      })}
    </ListContainer>
  )
}

export default List
