import { FPreactENDElement } from "../PreactENDElement"
import { PreactENDElement, PreactENDElementType } from "../types"

const RESERVED_PROPS = {
  key: true,
  ref: true,
}

export function jsx<P extends object = any>(
  type: PreactENDElementType,
  config: Record<string, any>,
  maybeKey?: string | null,
): PreactENDElement<P> {
  const props: Record<string, any> = {}
  let key: string | null = null
  let ref: any = null

  if (maybeKey !== undefined) {
    key = "" + maybeKey
  }
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

  return FPreactENDElement(type, key, ref, props)
}
