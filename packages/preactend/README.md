# PreactEND

[KO](./README.md) [EN](./README.en.md)

## What is PreactEND?

PreactEND는 pretend + React의 합성어로 React의 기능을 동일하게 유사하게 구현하는 것을 목표로 구현중인 프로젝트 입니다.
현재 이 프로젝트는 단순한 학습용도로 만들어졌으며, Production 환경에서 사용하는 것을 권장하지 않습니다..!

## Support Features

### v0.1.0

#### JSX syntax

**JSX** `classic`, `automatic` 모드를 호환하며 `createElement`, `Fragment` 함수 제공 및  `jsx-runtime (without dev mode)` 를 제공합니다.

#### Dom renderer

`preactend/dom/client` 패키지의 `createRoot` 함수를 통해 PreactEND Element를 Dom에 단순 rendering를 지원합니다.

#### TypeScript type hint

`JSX.IntrinsicElements`에 대한 type 힌트 제공 및 TypeScript를 지원합니다.