/** @jsx createElement */
/** @jsxFrag Fragment */

import { test, expect, beforeEach } from "vitest"
import { createRoot } from "../createRoot"
import { createElement, Fragment } from "../../../index"

beforeEach(() => {
  document.body.innerHTML = '<div id="root"></div>'
})

test("test simple hello world render", () => {
  const root = createRoot(document.getElementById("root") as unknown as Element)
  root.render(
    <div
      style={{
        color: "green",
      }}
    >
      <span
        style={{
          color: "red",
        }}
      >
        hello
      </span>{" "}
      world!
    </div>,
  )
  expect(document.getElementById("root")!.innerHTML).toBe(
    `<div style="color: green;"><span style="color: red;">hello</span> world!</div>`,
  )
})

test("test Function Component render", () => {
  const root = createRoot(document.getElementById("root") as unknown as Element)
  const TestComponent: JSXElement<{
    text: string
  }> = ({ text }) => {
    return (
      <div
        style={{
          backgroundColor: "#00FF88",
        }}
      >
        {text}
      </div>
    )
  }
  root.render(<TestComponent text="Hello World!" />)
  expect(document.getElementById("root")!.innerHTML).toBe(
    `<div style="background-color: #00FF88;">Hello World!</div>`,
  )
})

test("test Fragment Component render", () => {
  const root = createRoot(document.getElementById("root") as unknown as Element)
  const TestComponent: JSXElement<{
    text: string
  }> = ({ text }) => {
    return (
      <div
        style={{
          backgroundColor: "#00FF88",
        }}
      >
        {text}
      </div>
    )
  }
  root.render(
    <>
      <TestComponent text="Hello Fragment!" />
      <TestComponent text="Hello World!" />
      <TestComponent text="Hello PreactEND!" />
    </>,
  )
  expect(document.getElementById("root")!.innerHTML).toBe(
    `<div style="background-color: #00FF88;">Hello Fragment!</div><div style="background-color: #00FF88;">Hello World!</div><div style="background-color: #00FF88;">Hello PreactEND!</div>`,
  )
})

test("test primitive data type render", () => {
  const root = createRoot(document.getElementById("root") as unknown as Element)
  root.render(
    <>
      Hello {false} {true} {null} Fragment!
    </>,
  )
  expect(document.getElementById("root")!.innerHTML).toBe(`Hello    Fragment!`)
})

test("test unmount() after render()", () => {
  const root = createRoot(document.getElementById("root") as unknown as Element)
  const TestComponent: JSXElement<{
    text: string
  }> = ({ text }) => {
    return (
      <div
        style={{
          backgroundColor: "#00FF88",
        }}
      >
        {text}
      </div>
    )
  }
  root.render(
    <>
      <TestComponent text="Hello Fragment!" />
      <TestComponent text="Hello World!" />
      <TestComponent text="Hello PreactEND!" />
    </>,
  )
  expect(document.getElementById("root")!.innerHTML).toBe(
    `<div style="background-color: #00FF88;">Hello Fragment!</div><div style="background-color: #00FF88;">Hello World!</div><div style="background-color: #00FF88;">Hello PreactEND!</div>`,
  )

  root.unmount()
  expect(document.getElementById("root")!.innerHTML).toBe("")
})
