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

export type PreactENDElement<P extends object = any> = {
  $$typeof: PreactENDSymbols
  type: PreactENDElementType
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
