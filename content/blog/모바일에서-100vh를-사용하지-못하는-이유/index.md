---
title: "모바일에서 100vh를 사용하지 못하는 이유"
description: "모바일에서 100vh 적용 시 문제점과 문제 해결방법"
date: "2021-11-25"
thumbnail: ./thumbnail.png
---

## 정말 모바일에서는 100vh를 사용 못 하나요?

제목에서 "사용하지 못하는 이유"라고 작성했지만 모바일에서도 `100vh`는 사용 가능합니다.

하지만, 정상적으로 동작하는 PC와 달리 모바일은 Notch, Home indicator 등 실제 높이에 비해 사용할 수 있는 높이가 모두 다릅니다.

그래서 Apple에서도 이러한 문제를 개선하기 위해 Safe Area라는 환경 변수를 제공하는데, css에서 사용할 때는 `env()` 와 `constant()`를 사용하면 됩니다.

> `constant()`는 `env()`와 흡사하지만 iOS 11.0을 대응하기 위한 환경 변수입니다.

## env() / constant()의 문제점

![mobile-view-example](https://images.velog.io/images/nomorebuild/post/c49aa0be-6cac-4ead-a34b-31c82b7f3a16/mobile-view-example.png)

스크롤이 생겨도 상관없는 페이지라면 그대로 사용해도 괜찮지만 상단의 이미지와 같이 스크롤이 **_절대로_** 생기면 안 되는 페이지라면 env도 사실상 무용지물 일 때도 있습니다.

이러한 경우 공간 차지가 적은 요소가 렌더링 돼도 화면의 100%를 채우기 위해서 `100vh`를 사용하게 되는데, `position: absolute;` 상태에서 `env()`와 `constant()`를 적용해도 safe-area의 값을 기준으로 컨테이너의 높이가 더욱 증가해서 아무런 요소가 없어도 스크롤이 발생하는 경우가 있습니다.

## 모바일에서 전체 높이를 차지하는 방법

### 1. % 단위 사용

사실 body에 `height` 값을 100%로 지정하면 vh(Viewport height) 단위를 사용하지 않아도 최대 높이로 지정됩니다.

### 2. fill-available 사용

`fill-available`는 css에서 사용 가능한 값입니다.

사용 방법은 간단한데, 아래와 같이 작성하면 됩니다.

```css
/* Element의 전체 높이 */
.my-div-name {
  height: 100vh; /* fill-available 자체가 없을 때 사용 가능 */
  height: -moz-available; /* 파이어폭스에서 사용 가능 */
  height: -webkit-fill-available; /* 웹킷 기반 브라우저에서 사용 가능 */
  height: fill-available;
}
```

하지만 이 방식을 사용하면 PC에서는 100%가 작동하지만 일부 브라우저에서는 그렇지 않는데, 다음 방법을 사용하면 됩니다.

### 3. window.innerHeight 사용

> 이 포스트에서 작성된 코드는 React를 기준으로 작성되었습니다.

- 2-1. 기본

이 방법을 사용하기 위해서는 JavaScript가 필요합니다.

기본적인 동작 자체는 `EvnetListener`를 등록해서 height 값을 변경하면 되는데, React에서는 아래와 같이 적용하면 됩니다.

```jsx
// Hooks
import { useState, useEffect } from "react"

export const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const setWindowSize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    window.addEventListener("resize", setWindowSize)

    return () => {
      window.removeEventListener("resize", setWindowSize)
    }
  }, [])

  return {
    width,
    height,
  }
}
```

```jsx
// Render
// 보다 직관적인 예시를 위해 styled-components에 적용하는 예시로 작성됨
import React from "react"
import { useWindowSize } from "./useWindowSize" // 경로는 직접 지정하면 됩니다.
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  ${props => (props.height ? `height: ${props.height}px;` : "")}
`

const App = () => {
  const { height } = useWindowSize()

  return <Wrapper height={height}>// Your Children</Wrapper>
}

export default App
```

- 2.2 SSR에서 사용 가능한 useWindowSize

만약 2-1에서 작성한 코드가 잘 적용됐다면 resize 할 때마다 window의 내부 크기를 가져와 적용하게 되는데, 이 방식은 `SSR` 기반에서는 사용이 불가능합니다.

![gatsby-error-example](https://images.velog.io/images/nomorebuild/post/337e4ada-c25d-45b4-beee-f15572a50c04/gatsby-error-example.png)

그 이유는 위 이미지와 같이(Gatsby 빌드 시) window의 객체가 없다는 에러가 발생하게 되는데, 이러한 경우에는 window의 객체가 있는지 확인 후 객체가 없다면 해당 useEffect를 중단하는 형식으로 작성하면 된다.

```jsx
// Hooks
/*
 * window객체가 없으면 state들은 모두 0으로 지정하고
 * useEffect는 상단 return에 의해 아래 함수가 실행 되기 전 취소가 되는 로직이다.
 */
import { useState, useEffect } from "react"

export const useWindowSize = () => {
  const isBrowser = typeof window !== "undefined" // 변경됨
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0) // 변경됨
  const [height, setHeight] = useState(isBrowser ? window.innerHeight : 0) // 변경됨

  useEffect(() => {
    if (!isBrowser) return // 변경됨

    const setWindowSize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    window.addEventListener("resize", setWindowSize)

    return () => {
      window.removeEventListener("resize", setWindowSize)
    }
  }, [isBrowser]) // 변경됨

  return {
    width,
    height,
  }
}
```

이러한 검증 과정을 거치게 되면 SSR에서도 문제없이 사용할 수 있습니다.
