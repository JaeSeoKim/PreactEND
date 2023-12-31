import { test, expect } from "vitest"
import { createPreactENDElement } from "../PreactENDElement"
import { createElement } from "../createElement"
import { jsx } from "../jsx-runtime"

test("test basic creatElement", () => {
  const targetElement = createPreactENDElement("div", null, null, {
    style: {
      color: "red",
    },
  })
  const element = createElement("div", {
    style: {
      color: "red",
    },
  })
  expect(element).toEqual(targetElement)
})

test("test creatElement with children", () => {
  const children = [
    "hello ",
    createPreactENDElement("span", null, null, {
      style: {
        color: "green",
      },
      children: ["string"],
    }),
  ]
  const targetElement = createPreactENDElement("div", null, null, {
    style: {
      color: "red",
    },
    children: children,
  })
  const element = createElement(
    "div",
    {
      style: {
        color: "red",
      },
    },
    ...children,
  )
  expect(element).toEqual(targetElement)
})

test("test jsx === createElement", () => {
  const jsxresult = jsx(
    "div",
    {
      style: {
        color: "ref",
      },
    },
    "key",
  )

  const createElementResult = createElement("div", {
    style: {
      color: "ref",
    },
    key: "key",
  })

  expect(jsxresult).toEqual(createElementResult)
})
