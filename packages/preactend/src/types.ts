import { PREACTEND_FRAGMENT_TYPE, PreactENDSymbols } from "./PreactENDSymbols"

export type PreactENDNode =
  | PreactENDElement
  | string
  | number
  | Iterable<PreactENDNode>
  | boolean
  | null
  | undefined

export type PreactENDElementConstructor<P> = (props: P) => PreactENDNode

export type PreactENDElementType =
  | string
  | PreactENDElementConstructor<any>
  | typeof PREACTEND_FRAGMENT_TYPE

export type PreactENDElement<
  P extends object = any,
  T extends PreactENDElementType = PreactENDElementType,
> = {
  $$typeof: PreactENDSymbols
  type: T
  props: P
  key?: string | null
  ref?:
    | ("ref" extends keyof P
        ? P extends { ref?: infer R | undefined }
          ? R
          : never
        : never)
    | undefined
}

type FragmentProps = {
  key?: string | null
  children?: PreactENDNode | PreactENDNode[]
}
export type Fragment = (props: FragmentProps) => PreactENDElement

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace JSX {
  type IntrinsicElements = {
    [elemName in keyof HTMLElementTagNameMap]: Partial<
      Omit<HTMLElementTagNameMap[elemName], "style" | "children"> & {
        style?: Partial<CSSStyleDeclaration>
        children?: PreactENDNode | PreactENDNode[]
      }
    >
  }
}

export declare type JSXElement<P> = PreactENDElementConstructor<P>
