---
title: "Node 여러 버전 관리하기"
description: "n 혹은 nvm으로 node.js 버전을 관리해보자."
date: "2021-11-25"
thumbnail: ./thumbnail.png
---

> ⚠️ **참고사항**
> NVM이나 n을 설치하여 node의 버전을 관리한다면, 기존 node를 완전히 삭제 후 설치해야 합니다.
> 만약 node를 재설치 하지 않고 NVM이나 n을 받게 되면 전역으로 설치했던 패키지 혹은 기존에 설치된 node에서 충돌이 발생할 수 있으므로 [Windows에서 Node.js를 완전히 삭제하는 방법](https://stackoverflow.com/questions/20711240/how-to-completely-remove-node-js-from-windows)과 [MacOS에서 Node.js를 완전히 삭제하는 방법](https://stackoverflow.com/questions/11177954/how-do-i-completely-uninstall-node-js-and-reinstall-from-beginning-mac-os-x?rq=1)을 참고하시면 됩니다.

## 이슈 발견

이 글을 작성할 당시 React Native 프로젝트에서 graphql을 설치하던 도중 아래와 같이 버전 이슈가 발생했습니다.

```powershell
error graphql@16.1.0: The engine "node" is incompatible with this module. Expected version "^12.22.0 || ^14.16.0 || >=16.0.0". Got "14.15.1"
```

물론 node를 지우고 다시 해당 버전에 맞게 재설치 하는 것도 방법이지만, 이러한 버전 문제가 자주 발생할 것 같아 더 좋은 방법이 있는지 찾아보게 되었습니다

## n 사용 (Linux, Mac OS)

n을 사용하여 노드 버전을 여러 가지로 손쉽게 변경할 수 있습니다.

먼저 설치 방법을 보자면 우리가 평소에 패키지를 설치하는 것처럼 `npm install -g n` 이라고 입력하면 설치는 끝났지만 설치가 안 됐다면 [공식 문서](https://github.com/tj/n)에서 Brew 등 여러 설치법이 있으니 참고하면 됩니다.

만약 설치가 끝났다면 터미널에 `n` 을 입력하고 아래와 같은 결과가 나온다면 정상적으로 설치된 상태입니다.

```powershell
$ n
ο node/8.11.3
```

이제 `n <버전>` 을 입력하면 해당 버전의 node.js를 설치하고 적용하게 됩니다.

설치를 마쳤다면 이제 node.js를 여러 버전으로 사용할 수 있는데, 만약 버전을 변경하고 싶다면 `n use <버전>` 명령어로 변경하고 `n rm <버전>`으로 해당 버전의 node.js를 삭제할 수 있습니다.

## NVM (Windows)

Linux, Mac OS에서는 n을 사용해도 됐지만 안타깝게도 WSL(Windows Subsystem for Linux)를 제외한 Windows 터미널(cmd, powershell, git bash, Cygwin 등)에서 n을 사용할 수 없습니다.

그래도 다행히 Windows에서도 n과 비슷한 기능을 하는 버전 매니저인 [nvm-windows](https://github.com/coreybutler/nvm-windows)가 있습니다.

nvm은 npm에서 설치하는 n과 다르게 프로그램 설치를 별도로 해야 합니다.

설치 파일은 Github 레파지토리 내 [Releases](https://github.com/coreybutler/nvm-windows/releases)에서 받을 수 있는데, Releases에 접근하면 아래와 같이 파일들이 나열될 것입니다.

![nvm-assets](./nvm-assets)

여기서 noinstall(무설치), 설치 파일, 소스코드 등이 있지만 저는 install 할 때마다 버전 충돌이 생길 것을 대비해서 이번엔 installer 버전으로 설치를 했습니다.

만약 설치됐다면 이제 Powershell이나 cmd에서 실행이 가능한데 `nvm` 명령어를 치고 실행하면 아래와 비슷한 출력이 나오게 됩니다.

```powershell
Running version 1.1.9.

Usage:

  nvm arch                     : Show if node is running in 32 or 64 bit mode.
  nvm current                  : Display active version.
  nvm install <version> [arch] : The version can be a specific version, "latest" for the latest current version, or "lts" for the
                                 most recent LTS version. Optionally specify whether to install the 32 or 64 bit version (defaults
                                 to system arch). Set [arch] to "all" to install 32 AND 64 bit versions.
                                 Add --insecure to the end of this command to bypass SSL validation of the remote download server.
  nvm list [available]         : List the node.js installations. Type "available" at the end to see what can be installed. Aliased as ls.
  nvm on                       : Enable node.js version management.
  nvm off                      : Disable node.js version management.
  nvm proxy [url]              : Set a proxy to use for downloads. Leave [url] blank to see the current proxy.
                                 Set [url] to "none" to remove the proxy.
  nvm node_mirror [url]        : Set the node mirror. Defaults to https://nodejs.org/dist/. Leave [url] blank to use default url.
  nvm npm_mirror [url]         : Set the npm mirror. Defaults to https://github.com/npm/cli/archive/. Leave [url] blank to default url.
  nvm uninstall <version>      : The version must be a specific version.
  nvm use [version] [arch]     : Switch to use the specified version. Optionally use "latest", "lts", or "newest".
                                 "newest" is the latest installed version. Optionally specify 32/64bit architecture.
                                 nvm use <arch> will continue using the selected version, but switch to 32/64 bit mode.
  nvm root [path]              : Set the directory where nvm should store different versions of node.js.
                                 If <path> is not set, the current root will be displayed.
  nvm version                  : Displays the current running version of nvm for Windows. Aliased as v.
```

이제 node 버전을 변경하기 전 설치를 해야 하는데 `nvm install <버전>`을 입력해서 설치하면 됩니다.

그럼 설치가 제대로 진행됐다면 아래와 같이 출력이 나오는데 이제 `nvm use <버전>`을 입력하여 해당 버전을 설치하면 됩니다.

```powershell
Downloading node.js version 14.18.1 (64-bit)...
Complete
Creating C:\Users\PSR Media\AppData\Roaming\nvm\temp

Downloading npm version 6.14.15... Complete
Installing npm v6.14.15...

Installation complete. If you want to use this version, type

nvm use 14.18.1
```

만약 PC에 설치된 node 버전이 무엇인지 확인하고 싶다면 `nvm list`를 입력하여 확인 후 `nvm use` 명령어로 적용하면 됩니다.

단, 관리자 권한이 제공되지 않았을 경우 `nvm use`를 사용할 수 없으니 이 점 참고하시면 됩니다.
