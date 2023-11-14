import { PREACTEND_ELEMENT_TYPE } from "./PreactENDSymbols"
import { PreactENDElement, PreactENDElementType } from "./types"

export function FPreactENDElement(
  type: PreactENDElementType,
  key: string | null,
  ref: any | null,
  props: object,
): PreactENDElement {
  const element: PreactENDElement = {
    $$typeof: PREACTEND_ELEMENT_TYPE,
    type: type,
    props: props,
    key: key,
    ref: ref,
  }
  return element
}
