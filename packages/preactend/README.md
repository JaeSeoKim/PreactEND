# PreactEND

## What is PreactEND?

PreactEND는 pretend + React의 합성어로 React의 기능을 동일하게 유사하게 구현하는 것을 목표로 구현중인 프로젝트 입니다.
현재 이 프로젝트는 단순한 학습용도로 만들어졌으며, Production 환경에서 사용하는 것을 권장하지 않습니다..!

## Install

```sh
# npm
npm install @devjaeseo/preactend
# yarn
yarn add @devjaeseo/preactend
#pnpm
pnpm add @devjaeseo/preactend
```

## How to use

### with out JSX

```js
import { createElement } from "@devjaeseo/preactend";
import { createRoot } from "@devjaeseo/preactend/client";

const root = createRoot(document.querySelector<HTMLDivElement>("#app")!);

const App = () => {
  return createElement("div", {}, createElement("h1", {}, "Hello World!"));
};

root.render(<App />);
```

### with JSX

#### Pre Configuration

사용하는 Transpiler에게 JSX문법이 치환될 대상을 먼저 알려주어야 합니다.
아래의 예시는 TypeScript를 대상으로 합니다.

classic mode 사용시

```js
// tsconfig.json
...
"jsx": "react",
"jsxFactory": "createElement",
"jsxFragmentFactory": "Fragment",
...
```

automatic mode 사용시

```js
// tsconfig.json
...
"jsx": "react-jsx",
"jsxImportSource": "@devjaeseo/preactend",
// "jsxFactory": "createElement",
// "jsxFragmentFactory": "Fragment",
...
```

### Syntax

```js
import { createRoot } from "@devjaeseo/preactend/client";
// import { createElement } from "@devjaeseo/preactend"; classic 모드인 경우

const root = createRoot(document.querySelector<HTMLDivElement>("#app")!);

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

root.render(<App />);
```

## Support Features

### v0.1.x

#### JSX syntax

**JSX** `classic`, `automatic` 모드를 호환하며 `createElement`, `Fragment` 함수 제공 및 `jsx-runtime (without dev mode)` 를 제공합니다.

#### Dom renderer

`preactend/dom/client` 패키지의 `createRoot` 함수를 통해 PreactEND Element를 Dom에 단순 rendering를 지원합니다.

#### TypeScript type hint

`JSX.IntrinsicElements`에 대한 type 힌트 제공 및 TypeScript를 지원합니다.
