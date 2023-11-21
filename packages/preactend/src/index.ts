import { createElement } from "./createElement"
import { PREACTEND_FRAGMENT_TYPE } from "./PreactENDSymbols"
import type { Fragment as FragmentType } from "./types"
export type { JSX, JSXElement } from "./types"
import { jsx } from "./jsx-runtime/jsx"

// Fragment는 실제 값은 Symbol 이지만, Component로 취급하기 위해서 타입을 재정의하는 트릭을 사용
const Fragment = PREACTEND_FRAGMENT_TYPE as unknown as FragmentType

export { createElement, createElement as h, Fragment, jsx, jsx as jsxs }
