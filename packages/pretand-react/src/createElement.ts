import type { HTMLAttributes } from "react"

export type PretandReactNode = string | PretandReactElement

export type JSXElementConstructor<P> = (props: P) => PretandReactNode

export interface PretandReactElement<
  P = any,
  T extends string | JSXElementConstructor<any> =
    | string
    | JSXElementConstructor<any>,
> {
  type: T
  props: P
  key: string | null
}

export function createElement<
  P extends HTMLAttributes<T>,
  T extends keyof HTMLElementTagNameMap,
>(
  type: T,
  props?: any | null,
  ...children: PretandReactNode[]
): PretandReactElement<P, T> {
  return {
    type,
    props: {
      ...props,
      children: children,
    },
    key: null,
  }
}
