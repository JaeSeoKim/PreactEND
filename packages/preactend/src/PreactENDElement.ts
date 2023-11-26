import { PREACTEND_ELEMENT_TYPE } from "./PreactENDSymbols"
import { PreactENDElement, PreactENDElementType } from "./types"

export function createPreactENDElement(
  type: PreactENDElementType,
  key: string | null,
  ref: any | null,
  props: object,
): PreactENDElement {
  return {
    $$typeof: PREACTEND_ELEMENT_TYPE,
    type: type,
    props: props,
    key: key,
    ref: ref,
  }
}
