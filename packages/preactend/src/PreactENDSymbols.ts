/**
 * PreactEND Symbols list..! for prevent XSS
 *
 * @refer https://overreacted.io/why-do-react-elements-have-typeof-property/
 */

export const PREACTEND_ELEMENT_TYPE = Symbol.for("preactend.element")
export const PREACTEND_FRAGMENT_TYPE = Symbol.for("preactend.fragment")

export type PreactENDSymbols = typeof PREACTEND_ELEMENT_TYPE
