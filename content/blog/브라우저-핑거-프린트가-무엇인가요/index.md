---
title: "브라우저 핑거 프린트가 무엇인가요?"
description: "사용자 추적에 자주 사용되는 브라우저 핑거 프린트에 대해서 알아봅시다."
date: "2022-01-09"
---

## 브라우저 핑거 프린트 소개

브라우저 핑거 프린트(혹은 디바이스 핑거 프린트)란 사용자 식별을 위해 수집된 기기의 하드웨어 정보를 뜻하며 거의 중복되지 않는 값을 가집니다.

브라우저 핑거 프린트는 ip 주소가 숨겨지거나 영구 쿠키(혹은 좀비 쿠키)를 이용하여 사용자를 추적할 수 없는 경우 사용되며 같은 기기에서 다른 브라우저로 접속했을 때 사용자를 추적하기 위해 사용되거나 신용카드 위조를 방지하기 위해 사용됩니다.

그리고 브라우저 핑거 프린트는 저장소에 직접 저장되는 쿠키 방식과 다르게 하드웨어 정보를 기반으로 사용자를 식별하기 때문에 하드웨어의 속도에 영향이 생기지 않는다는 장점이 있습니다.

하지만 브라우저 핑거프린트는 금융에 사용된다는 장점도 있지만 특정 사용자를 대상으로 한 "타게팅 광고"에도 사용이 되는데, 이러한 문제로 인해 Tor Browser, Firefox, Brave 등 보안을 중요시하는 브라우저는 핑거 프린트 사용을 제한하고 있습니다.

## 브라우저 핑거 프린트 추적 방법

브라우저 핑거 프린트는 브라우저 내 정보를 이용하여 추적하는데, 일부 브라우저에서 작동하지 않거나 중복 등 여러 가지 문제가 존재할 수 있으므로 한 가지의 정보만을 사용하는 것이 아닌, 여러 가지 정보들을 합치고 정보의 중복을 낮추면서 하나의 묶음으로 만든 뒤 해당 정보를 기반으로 핑거 프린트를 추적 합니다.

### UA(User-Agent)

UA(User-Agent)란 운영체제, 브라우저 버전, 엔진 버전 등의 내용이 한 번에 축약 된 정보들입니다.

```jsx
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36"
```

위 내용은 이 포스트를 작성할 때 PC에서 출력한 User-Agent입니다.

UA의 내용이 각 디바이스마다 다르다는 것을 이용하여 기기 정보를 추적합니다.

하지만 이 방식은 유명한 브라우저 (Google Chrome, Mozilla Firefox, Microsoft Edge) 등을 사용한다면 값이 비슷하므로 중복되지 않는 핑거 프린트 값을 추적할 확률을 낮춰줍니다

### 브라우저 플러그인 목록

대부분의 브라우저(크로미움 기반 / Google Chrome 등)에서는 사용자의 편의성을 위해 "플러그인"이 탑재 되어있으며, 주로 내장 PDF Viewer, Active X 등이 대표적입니다.

```jsx
PluginArray {0: Plugin, 1: Plugin, 2: Plugin, 3: Plugin, 4: Plugin, PDF Viewer: Plugin, Chrome PDF Viewer: Plugin, Chromium PDF Viewer: Plugin, Microsoft Edge PDF Viewer: Plugin, WebKit built-in PDF: Plugin, …}
```

이 값은 `navigator.plugins`를 출력한 값인데, PluginArray으로 반환됩니다.

이것도 마찬가지로 사용자가 브라우저에 탑재된 플러그인 이외의 별도 플러그인을 설치하게 되면 중복되지 않는 브라우저 핑거 프린트를 추적할 확률이 높아지는데, 이러한 문제를 방지하기 위해 Mozilla Firefox는 29.0 (2014.04.29 Realese) 이후로 `naviagtor.plugins`속성의 출력을 제한하게 되면서 이 방식도 사실상 사용 할수 없게 됐습니다.

### WebGL/Canvas를 이용한 핑거 프린트 출력

브라우저 발전하면서 별도 플러그인 없이 그래픽을 표현하기 위한 API인 WebGL을 제공합니다.

먼저 Canvas와 WebGL을 이용하여 핑거 프린트 출력을 하기 위해선 Canvas 요소를 추가 해줘야 합니다.

그 이후 다음과 같이 검증을 진행하면 됩니다.

### Canvas를 이용한 핑거 프린트 출력

HTML나 JavaScript에서 Canvas를 추가했다면 아래와 같이 작성해 봅시다.

이번 Canvas 추적 예제는 BrowserLeaks에서 가져왔습니다.

```jsx
// 생성하지 않고 이미 선언된 DOM을 다시 불러와도 됨.
const canvas = document.createElement("canvas")
const ctx = canvas.getContext("2d")

// Text with lowercase/uppercase/punctuation symbols
const txt = "BrowserLeaks,com <canvas> 1.0"
ctx.textBaseline = "top"
// The most common type
ctx.font = "14px 'Arial'"
ctx.textBaseline = "alphabetic"
ctx.fillStyle = "#f60"
ctx.fillRect(125, 1, 62, 20)
// Some tricks for color mixing to increase the difference in rendering
ctx.fillStyle = "#069"
ctx.fillText(txt, 2, 15)
ctx.fillStyle = "rgba(102, 204, 0, 0.7)"
ctx.fillText(txt, 4, 17)
```

만약 코드를 성공적으로 실행했다면 아래와 같은 Canvas 결과물이 나올 것입니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2a205da7-001d-492d-b06b-df7a5a9713b1/Untitled.png)

이제 이 Canvas로 무엇을 할지 의문이 들 텐데, Canvas를 png 등 이미지로 바꿀 수 있다는 것을 생각해 봅시다.

Canvas에 `toDataURL`을 사용하면 png로 변환 되어 Base64로 인코딩되고 아래와 같은 출력이 나옵니다.

```jsx
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAA (생략)"
```

하지만 이 상태로는 아직 사용할 수 없는데, 그 이유는 위에 설명했다시피 Base64로 인코딩 되어있기 때문입니다.

먼저, Base64 값을 출력하기 위해선 Base64라는 정보가 담긴 문자열을 먼저 치환해서 제거해야 하는데, 간단하게 `replace()` 함수로 변경하면 됩니다.

```jsx
canvasBase64Result.replace("data:image/png;base64", "")
```

그럼 다음과 같은 결과물이 나오게 되는데, 이것이 정보값을 제외한 Base64 문자열입니다.

```jsx
"iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAA (생략)"
```

이제 이 결과물을 여러 가지 방법으로 핑거 프린트를 위한 정보 값을 출력시킬 수 있는데, MD5로 변환하는 방법과 PNG에 필수적으로 포함되는 Chunk(IHDR, IDAT, IEND)를 확인하면 됩니다.

하지만 이번 포스트에서는 상대적으로 간단한 MD5 만 다루고 PNG Chunk 분석 과정은 별도 포스트로 작성하겠습니다.

### MD5 변환

MD5 변환 과정은 이미 공개된 [MD5 알고리즘](http://www.myersdaily.org/joseph/javascript/md5-text.html)을 기반으로 코드를 작성하면 되는데, 이번 주제는 MD5에 대해서 설명하는 것이 아니니 간단하게 [예제 코드](http://www.myersdaily.org/joseph/javascript/md5-text.html)만 확인하시면 됩니다.

만약 코드를 성공적으로 추가했다면 이제 base64로 된 png 파일을 복호화 해야 하는데 다행히 JavaScript는 `atob`이라는 함수가 기본으로 제공되어 다음과 같이 복호화를 할 수 있습니다.

```jsx
// From (Base64)
const decodedPng = abob(
  "iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAA (생략)"
)

// to (HEX)
console.log(decodedPng) // "\x89PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00Ü (생략)"
```

성공적으로 base64에서 복호화 된 png가 있다면 이제 함수를 실행해 줄 차례인데, 아까 만들었던 md5 함수를 사용하여 Hash 과정을 거친다면 다음과 같은 출력을 받게 됩니다.

```jsx
const md5ConvertedPng = MD5(
  "\x89PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00Ü (생략)"
)

console.log(md5ConvertedPng) // 2ddec8438d590d1c50985c8173afce79
```

## 마지막으로...

이 외에도 WebGL 자체 추적과 ip로 핑거 프린트를 추적하는 과정 등 방법은 많이 남아 있지만 이번 포스트에서는 크게 3가지 방법을 소개해 보았습니다.

다양한 추적 방법을 참고하려면 [BrowserLeaks](https://browserleaks.com/), [AmlUnique](https://amiunique.org/) 그리고 JavaScript 라이브러리로 제작된 [FingerprintJS](https://fingerprintjs.com/)를 참고하시면 됩니다.

하지만 현재까지 나온 브라우저 핑거 프린트 추적 방법은 브라우저에서 일부 사용할수 없는 속성과 시크릿 모드로 인해 제대로 작동하지 않아 정확하게 추적할 수 있는 방법이 없습니다.

그리고 개인 정보 수집을 원치 않아 핑거 프린트 추적을 차단하고 싶다면 Firefox, Brave 등 브라우저 설정에서 핑거 프린트 차단 기능이 있으니 활성화하는 것도 방법입니다.
