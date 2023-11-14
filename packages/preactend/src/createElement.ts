import type {
  PreactENDElement,
  PreactENDElementType,
  PreactENDNode,
} from "./types"
import { FPreactENDElement } from "./PreactENDElement"

const RESERVED_PROPS = {
  key: true,
  ref: true,
}
export function createElement<P extends object>(
  type: PreactENDElementType,
  config: Record<string, any> | null,
  ...children: PreactENDNode[]
): PreactENDElement<P> {
  const props: Record<string, any> = {}
  let key: string | null = null
  let ref: any = null

  if (config !== null) {
    if (config.key !== undefined) {
      key = "" + config.key
    }
    if (config.ref !== undefined) {
      ref = config.ref
    }

    for (const propName in config) {
      if (
        Object.prototype.hasOwnProperty.call(config, propName) &&
        !RESERVED_PROPS.hasOwnProperty(propName)
      ) {
        props[propName] = config[propName]
      }
    }
  }

  const childrenLength = arguments.length - 2
  if (childrenLength === 1) {
    props.children = children[0]
  } else if (childrenLength > 1) {
    props.children = children
  }

  return FPreactENDElement(type, key, ref, props)
}
