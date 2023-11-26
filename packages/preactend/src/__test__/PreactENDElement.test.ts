import { expect, test } from "vitest"
import { createPreactENDElement } from "../PreactENDElement"
import { PREACTEND_ELEMENT_TYPE } from "../PreactENDSymbols"

test("create simple PreactENDElement", () => {
  const type = "div"
  const key = null
  const ref = null
  const props = {
    style: {
      color: "red",
    },
  }
  const element = createPreactENDElement(type, key, ref, props)
  expect(element.$$typeof === PREACTEND_ELEMENT_TYPE)
  expect(element.type === type)
  expect(element.ref === ref)
  expect(element.key === key)
  expect(element.props === props)
})
