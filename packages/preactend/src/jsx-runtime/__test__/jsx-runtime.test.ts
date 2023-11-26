import { test, expect } from "vitest"
import { createPreactENDElement } from "../../PreactENDElement"
import { createElement } from "../../createElement"
import { jsx } from "../../jsx-runtime"

test("basic creatElement", () => {
  const targetElement = createPreactENDElement("div", null, null, {
    style: {
      color: "red",
    },
  })
  const element = jsx("div", {
    style: {
      color: "red",
    },
  })
  expect(element).toEqual(targetElement)
})

test("creatElement with children", () => {
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
  const element = jsx("div", {
    style: {
      color: "red",
    },
    children,
  })
  expect(element).toEqual(targetElement)
})

test("createElement === jsx", () => {
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

test("basic forward key", () => {
  const element = jsx(
    "div",
    {
      children: "Hello World!",
    },
    "maybeKey!",
  )
  expect(element.key).toBe("maybeKey!")
})

test("forward key form spread props", () => {
  const objectWithKey = {
    key: "key",
  }
  const element = jsx("div", {
    ...objectWithKey,
    children: "Hello World!",
  })
  expect(element.key).toBe("key")
})