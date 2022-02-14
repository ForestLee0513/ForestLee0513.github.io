---

title: "RN 에서 StatusBar가 안보이는 문제"
description: "RN에서 컨텐츠마다 StatusBar가 안보이는 문제를 살펴보고 해결하는 방법을 소개합니다."
date: "2022-02-14"
---## 이슈 발견

얼마 전 RN 프로젝트를 진행하며 레이아웃을 적용하게 되었는데, 이 과정에서 `StatusBar`의 색상이 배경색과 비슷하게 보이는 문제가 발생하였습니다.

다행히 이전 글인 **RN에서 Status Bar 영역 구분** 글에서도 다뤘던 `StatusBar` 컴포넌트를 사용하여 제어가 가능하므로 오늘도 이것을 다루고자 합니다.

## StatusBar 살펴보기

먼저 `StatusBar`는 React Native에서 제공하는 컴포넌트이지만 사실 이 컴포넌트는 자주 사용할 일이 없습니다.

먼저, `StatusBar`는 기본으로 이미 정해진 값이 있어 기본값으로 적용하지만 커스텀이 필요한 경우가 생겨 해당 컴포넌트를 직접 추가하게 되면, 여러 개를 생성할 수 있지만 마운트 됐을 때 나중에 생성된 컴포넌트를 기준으로 `StatusBar`가 갱신됩니다.

그래서 이 컴포넌트 덕분에 우리는 다양한 `StatusBar`의 속성을 추가하거나 제거할 수 있습니다.

하지만 이 컴포넌트의 사용을 최소화해야 하지만 `StatusBar`가 보이지 않는 문제가 발생하니 다루도록 하겠습니다.

## barStyle란 무엇인가요?

이번 이슈는 `StatusBar`의 내용이 보이지 않는 문제가 발생한다는 것인데, 이 이슈는 `barStyle`을 수정하면 해결됩니다.

이 속성은 Android, iOS 모두 지원하며 기본값은 “default”입니다.

하지만 값을 “default”로 해도 보이지 않을 때가 있는데, 이때 `barStyle`를 사용합니다.

값은 enum 타입으로 “default”와 “light-content” 그리고 “dark-content”이 포함되어 있는데, 상황에 맞게 변경하면 됩니다.

그럼 “default”까지 총 3가지 속성이 있는 것은 충분히 이해했는데, 어떤 기준으로 수정하는지에 대한 의문점이 생길 수 있습니다.

아마 속성에 “content”라는 키워드가 들어가서 App의 배경을 기준으로 잡는다고 생각할 수도 있으나 App의 배경을 기준으로 잡는 것이 아닌 `StatusBar`의 텍스트 색상을 기준으로 잡습니다.

예를 들자면, 흰색 배경에서는 어두운 `StatusBar`가 필요하니 `barStyle`은 “dark-content”로 변경하는 형식으로 진행하면 됩니다.

## 재사용 컴포넌트로 변경하기

위 내용에서 `barStyle` 컴포넌트로 텍스트 색상을 바꾼다는 것을 알았습니다.

하지만 매번 컴포넌트를 요청 하는 것도 불편하고 React Native 공식 문서에서도 **”`barStyle` 컴포넌트를 자주 사용하는 것은 좋지 않다”**고 명시가 되어 있어 겉에 감싸는 컨테이너 형식으로 만들어서 재사용을 하고자 합니다.

```tsx
// GlobalContainer.tsx
import React from "react"
import styled from "styled-components"
import { StatusBar } from "react-native"

interface IGlobalContainer {
  backgroundColor?: string
  barStyle: "default" | "dark-content" | "light-content"
  horizontalMargin: number
  children: React.ReactNode
  style?: { [key: string]: string | number }
}

const StyledContainer = styled.SafeAreaView`
  background-color: ${(props: IGlobalContainer) =>
    props.backgroundColor ?? "#ffffff"};
  ${StatusBar.currentHeight ? `padding-top: ${StatusBar.currentHeight}px;` : ""}
  flex: 1;
` as React.ElementType

const StyledInnerContainer = styled.View`
  margin-left: ${(props: IGlobalContainer) => props.horizontalMargin ?? 32}px;
  margin-right: ${(props: IGlobalContainer) => props.horizontalMargin ?? 32}px;
` as React.ElementType

const GlobalContainer = ({
  horizontalMargin,
  backgroundColor,
  style,
  children,
  barStyle,
}: IGlobalContainer) => {
  return (
    <>
      <StatusBar barStyle={barStyle ?? "default"} />
      <StyledContainer backgroundColor={backgroundColor} style={{ ...style }}>
        <StyledInnerContainer horizontalMargin={horizontalMargin}>
          {children}
        </StyledInnerContainer>
      </StyledContainer>
    </>
  )
}
```

간단하게 예제를 만들어 보았습니다.

먼저 전역 컨테이너의 스타일을 담당하는 styled-component로 만들어진 `StyledContainer`와 `StyledInnerContainer`가 있어 해당 컴포넌트 안에 `children` prop에 컴포넌트가 들어오게 되면 두 컴포넌트에 감싸져서 Layout 형식으로 감싸게 됩니다.

그리고 `StyledContainer`와 `StyledInnerContainer`의 상단에 별도로 React Native에서 제공되는 컴포넌트인 `StatusBar`를 적용하는데, **barStyle란 무엇인가요?** 챕터에서 설명했던 속성을 재사용 가능한 컴포넌트 형식으로 같이 한 레이아웃 안에 적용했습니다.

또한 `StyledContainer`와 `StyledInnerContainer` 컴포넌트가 아닌 본인이 원하는 Footer, Header 등 원하는 컴포넌트를 별도로 적용하여 더욱 유연한 컴포넌트를 적용하는 것도 가능합니다.

위에서 만든 컴포넌트를 실제로 활용하자면 아래와 같이 적용됩니다.

```tsx
import { React } from "react"
/*
	절대경로와 index파일로 따로 export 했다는 조건으로 했습니다.
	import 경로는 본인이 원하는 경로, 패턴에 맞게 다시 지정하시면 됩니다.
*/
import { GlobalContainer } from "@components"
import { Text } from "react-native"

const MyComponent = () => {
  return (
    <GlobalContainer barStyle="dark-content" backgroundColor="#f7f7f7">
      <Text>Hello World from "GlobalContainer" with "barStyle"</Text>
    </GlobalContainer>
  )
}

export default MyComponent
```

마지막으로 다크 모드 대응에 대해서 작성하진 않았지만 Context API, Redux 등 상태 관리를 사용하여 다크 모드 제어도 추가하시면 더욱 유연하게 활용할 수 있는 레이아웃 컴포넌트를 만들 수 있습니다.
